import {expect} from 'chai'
import ObservableQuery from '../../../src/impl/ObservableQuery'
import {CommunicationObserver} from '../../../src'
import completeCommunicationObserver from '../../../src/impl/completeCommunicationObserver'
import {Observer} from '../../../src/observable'

class TestSubscriber implements Observer<string> {
  results: string[] = []
  next(s: string): void {
    this.results.push(s)
  }
  error(_: any): void {
    this.results.push('error')
  }
  complete(): void {
    this.results.push('complete')
  }
}

describe('ObservableQuery', () => {
  it('sequence complete', async () => {
    let source: CommunicationObserver<string> = completeCommunicationObserver(
      {}
    ) // source is assigned by subject.subscribe
    const subject = new ObservableQuery<string>(
      consumer => (source = consumer),
      x => x
    )
    const subscriber = new TestSubscriber()
    const subscription = subject.subscribe(subscriber)
    expect(subscription.closed).deep.equals(false)
    source.next('next')
    source.next('next')
    source.complete()
    expect(subscription.closed).equals(true)
    expect(['next', 'next', 'complete']).deep.equals(subscriber.results)
  })
  it('sequence error', async () => {
    let source: CommunicationObserver<string> = completeCommunicationObserver(
      {}
    )
    const subject = new ObservableQuery<string>(
      consumer => (source = consumer),
      x => x
    )
    const subscriber = new TestSubscriber()
    const subscription = subject.subscribe(subscriber)
    expect(subscription.closed).equals(false)
    source.next('next')
    source.next('next')
    source.error(new Error())
    expect(subscription.closed).equals(true)
    expect(['next', 'next', 'error']).deep.equals(subscriber.results)
  })
  it('unsubscribed', async () => {
    let source: CommunicationObserver<string> = completeCommunicationObserver(
      {}
    )
    const subject = new ObservableQuery<string>(
      consumer => (source = consumer),
      x => x
    )
    const subscriber = new TestSubscriber()
    const subscription = subject.subscribe(subscriber)
    expect(subscription.closed).equals(false)
    source.next('next')
    subscription.unsubscribe()
    expect(subscription.closed).equals(true)
    expect(['next']).deep.equals(subscriber.results)
  })
  it('executor error', async () => {
    const subject = new ObservableQuery<string>(
      () => {
        throw new Error()
      },
      x => x
    )
    const subscriber = new TestSubscriber()
    const subscription = subject.subscribe(subscriber)
    expect(subscription.closed).equals(true)
    expect(['error']).deep.equals(subscriber.results)
  })
  it('subscriber methods are optional', async () => {
    let source: CommunicationObserver<string> = completeCommunicationObserver(
      {}
    ) // source is assigned by subject.subscribe
    const subject = new ObservableQuery<string>(
      consumer => (source = consumer),
      x => x
    )
    const s1 = subject.subscribe({})
    source.next('next')
    source.complete()
    expect(s1.closed).equals(true)

    const s2 = subject.subscribe((null as any) as Observer<string>)
    source.next('next')
    source.error(new Error())
    expect(s2.closed).equals(true)

    let called = false
    const s3 = subject.subscribe(_ => (called = true))
    source.next('next')
    source.complete()
    expect(called).equals(true)
    expect(s3.closed).equals(true)
  })
})
