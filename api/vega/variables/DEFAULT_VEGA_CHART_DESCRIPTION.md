---
url: /api/vega/variables/DEFAULT_VEGA_CHART_DESCRIPTION.md
---
[@sqlrooms/vega](../index.md) / DEFAULT\_VEGA\_CHART\_DESCRIPTION

# Variable: DEFAULT\_VEGA\_CHART\_DESCRIPTION

> `const` **DEFAULT\_VEGA\_CHART\_DESCRIPTION**: "A tool for creating VegaLite charts based on the schema of the SQL query result from the "query" tool.\nIn the response:\n- omit the data from the vegaLiteSpec\n- provide an sql query in sqlQuery instead.\n\nBest practices for creating charts:\n- try to use strptime to convert e.g. YYYYMMDD string format to a proper type (date, datetime, etc.)\n- try to set the top-level width property to "container", so the chart will stretch to the full width of its parent container.\n- for bar charts with few categories (<= 5), widen bars by reducing band padding on the x scale:\n  - For 2-3 categories: set "encoding.x.scale.paddingInner" to 0.2 and "paddingOuter" to 0.1 for optimal bar width with clear separation\n  - For 4-5 categories: set "encoding.x.scale.paddingInner" to 0.1 and "paddingOuter" to 0.05 for narrower spacing\n  - Adjust to lower values (0.05/0.02 or 0/0) only if user specifically requests maximum bar width\n- If the chart uses an encoding channel like color, shape, or size to represent a data field, then include a legend object in that channel's encoding (unless explicitly told not to)."

Default description for the VegaChart tool
