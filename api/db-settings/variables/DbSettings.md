---
url: 'https://sqlrooms.org/api/db-settings/variables/DbSettings.md'
---
[@sqlrooms/db-settings](../index.md) / DbSettings

# Variable: DbSettings

> `const` **DbSettings**: `object`

## Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
|  `TriggerButton` | `ForwardRefExoticComponent`<`Omit`<`ButtonProps` & `RefAttributes`<`HTMLButtonElement`>, `"ref"`> & `RefAttributes`<`HTMLButtonElement`>> | `DbSettingsTriggerButton` |
|  `SaveButton()` | (`__namedParameters`) => `Element` | `DbSettingsSaveButton` |
|  `Connections()` | () => `Element` | `DbSettingsConnections` |
|  `Diagnostics()` | () => `Element` | `DbSettingsDiagnostics` |
|  `DriversTabLabel()` | () => `Element` | - |
|  `ConnectionsList()` | () => `Element` | `DbConnectionsList` |
|  `ConnectionForm()` | (`__namedParameters`) => `Element` | `DbConnectionForm` |
