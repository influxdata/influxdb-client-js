<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [DashboardWithViewProperties](./influxdb-client-apis.dashboardwithviewproperties.md)

## DashboardWithViewProperties type

<b>Signature:</b>

```typescript
export declare type DashboardWithViewProperties = CreateDashboardRequest & {
    links?: {
        self?: Link;
        cells?: Link;
        members?: Link;
        owners?: Link;
        labels?: Link;
        org?: Link;
    };
    readonly id?: string;
    meta?: {
        createdAt?: string;
        updatedAt?: string;
    };
    cells?: CellsWithViewProperties;
    labels?: Labels;
};
```