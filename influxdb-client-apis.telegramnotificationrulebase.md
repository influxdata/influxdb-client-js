<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [TelegramNotificationRuleBase](./influxdb-client-apis.telegramnotificationrulebase.md)

## TelegramNotificationRuleBase interface

<b>Signature:</b>

```typescript
export interface TelegramNotificationRuleBase 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [disableWebPagePreview?](./influxdb-client-apis.telegramnotificationrulebase.disablewebpagepreview.md) | boolean | <i>(Optional)</i> Disables preview of web links in the sent messages when "true". Defaults to "false" . |
|  [messageTemplate](./influxdb-client-apis.telegramnotificationrulebase.messagetemplate.md) | string | The message template as a flux interpolated string. |
|  [parseMode?](./influxdb-client-apis.telegramnotificationrulebase.parsemode.md) | 'MarkdownV2' \| 'HTML' \| 'Markdown' | <i>(Optional)</i> Parse mode of the message text per https://core.telegram.org/bots/api\#formatting-options . Defaults to "MarkdownV2" . |
|  [type](./influxdb-client-apis.telegramnotificationrulebase.type.md) | 'telegram' | The discriminator between other types of notification rules is "telegram". |
