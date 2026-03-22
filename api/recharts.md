---
url: 'https://sqlrooms.org/api/recharts.md'
---
# @sqlrooms/recharts

Recharts integration for SQLRooms with a theme-aware chart container and tooltip/legend helpers.

This package re-exports the full `recharts` API and adds SQLRooms-friendly wrappers:

* `ChartContainer`
* `ChartTooltip`, `ChartTooltipContent`
* `ChartLegend`, `ChartLegendContent`
* `ChartConfig` typing for series labels/colors

## Installation

```bash
npm install @sqlrooms/recharts
```

## Basic usage

```tsx
import {
  Bar,
  BarChart,
  CartesianGrid,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  XAxis,
  YAxis,
} from '@sqlrooms/recharts';

const defaultRows = [
  {month: 'Jan', revenue: 1200},
  {month: 'Feb', revenue: 1800},
  {month: 'Mar', revenue: 1600},
];

export function RevenueChart({
  rows = defaultRows,
}: {
  rows?: Array<{month: string; revenue: number}>;
}) {
  return (
    <ChartContainer
      className="min-h-[16rem] w-full"
      config={{
        revenue: {
          label: 'Revenue',
          color: 'hsl(var(--chart-1))',
        },
      }}
    >
      <BarChart data={rows} accessibilityLayer={true}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="revenue" fill="var(--color-revenue)" radius={6} />
      </BarChart>
    </ChartContainer>
  );
}
```

## Using with SQLRooms query results

```tsx
import {useSql} from '@sqlrooms/duckdb';
import {RevenueChart} from './RevenueChart';

function RevenueChartFromSql() {
  const {data} = useSql<{month: string; revenue: number}>({
    query: `
      SELECT month, SUM(revenue) AS revenue
      FROM sales
      GROUP BY month
      ORDER BY month
    `,
  });

  const rows = data?.toArray() ?? [];
  return <RevenueChart rows={rows} />;
}
```

## Notes

* `@sqlrooms/recharts` is UI-only; it does not require a specific SQLRooms slice.
* Best used with `@sqlrooms/duckdb` query hooks and `@sqlrooms/ui` theming.

## Namespaces

* [CartesianGrid](recharts/namespaces/CartesianGrid/index.md)
* [Customized](recharts/namespaces/Customized/index.md)
* [Label](recharts/namespaces/Label/index.md)
* [LabelList](recharts/namespaces/LabelList/index.md)

## Classes

* [Area](classes/Area.md)
* [Bar](classes/Bar.md)
* [Brush](classes/Brush.md)
* [CartesianAxis](classes/CartesianAxis.md)
* [ErrorBar](classes/ErrorBar.md)
* [Line](classes/Line.md)
* [ReferenceArea](classes/ReferenceArea.md)
* [ReferenceDot](classes/ReferenceDot.md)
* [ReferenceLine](classes/ReferenceLine.md)
* [Scatter](classes/Scatter.md)
* [XAxis](classes/XAxis.md)
* [YAxis](classes/YAxis.md)
* [ZAxis](classes/ZAxis.md)
* [Sankey](classes/Sankey.md)
* [Treemap](classes/Treemap.md)
* [DefaultLegendContent](classes/DefaultLegendContent.md)
* [Legend](classes/Legend.md)
* [Tooltip](classes/Tooltip.md)
* [Funnel](classes/Funnel.md)
* [Pie](classes/Pie.md)
* [PolarAngleAxis](classes/PolarAngleAxis.md)
* [PolarRadiusAxis](classes/PolarRadiusAxis.md)
* [Radar](classes/Radar.md)
* [RadialBar](classes/RadialBar.md)

## Interfaces

* [ZAxisProps](interfaces/ZAxisProps.md)
* [TreemapProps](interfaces/TreemapProps.md)
* [DefaultTooltipContentProps](interfaces/DefaultTooltipContentProps.md)
* [ResponsiveContainerProps](interfaces/ResponsiveContainerProps.md)
* [PieLabelRenderProps](interfaces/PieLabelRenderProps.md)

## Type Aliases

* [ChartConfig](type-aliases/ChartConfig.md)
* [AreaProps](type-aliases/AreaProps.md)
* [BarProps](type-aliases/BarProps.md)
* [BrushProps](type-aliases/BrushProps.md)
* [CartesianAxisProps](type-aliases/CartesianAxisProps.md)
* [CartesianGridProps](type-aliases/CartesianGridProps.md)
* [ErrorBarProps](type-aliases/ErrorBarProps.md)
* [LineProps](type-aliases/LineProps.md)
* [ReferenceAreaProps](type-aliases/ReferenceAreaProps.md)
* [ReferenceDotProps](type-aliases/ReferenceDotProps.md)
* [ReferenceLineProps](type-aliases/ReferenceLineProps.md)
* [ScatterProps](type-aliases/ScatterProps.md)
* [XAxisProps](type-aliases/XAxisProps.md)
* [YAxisProps](type-aliases/YAxisProps.md)
* [CellProps](type-aliases/CellProps.md)
* [CustomizedProps](type-aliases/CustomizedProps.md)
* [DefaultLegendContentProps](type-aliases/DefaultLegendContentProps.md)
* [LabelProps](type-aliases/LabelProps.md)
* [LabelListProps](type-aliases/LabelListProps.md)
* [LegendProps](type-aliases/LegendProps.md)
* [TextProps](type-aliases/TextProps.md)
* [TooltipProps](type-aliases/TooltipProps.md)
* [LayerProps](type-aliases/LayerProps.md)
* [SurfaceProps](type-aliases/SurfaceProps.md)
* [FunnelProps](type-aliases/FunnelProps.md)
* [PieLabel](type-aliases/PieLabel.md)
* [PieProps](type-aliases/PieProps.md)
* [PolarAngleAxisProps](type-aliases/PolarAngleAxisProps.md)
* [PolarGridProps](type-aliases/PolarGridProps.md)
* [PolarRadiusAxisProps](type-aliases/PolarRadiusAxisProps.md)
* [RadarProps](type-aliases/RadarProps.md)
* [RadialBarProps](type-aliases/RadialBarProps.md)
* [CrossProps](type-aliases/CrossProps.md)
* [CurveProps](type-aliases/CurveProps.md)
* [DotProps](type-aliases/DotProps.md)
* [PolygonProps](type-aliases/PolygonProps.md)
* [RectangleProps](type-aliases/RectangleProps.md)
* [SectorProps](type-aliases/SectorProps.md)
* [SymbolsProps](type-aliases/SymbolsProps.md)
* [TrapezoidProps](type-aliases/TrapezoidProps.md)
* [LegendType](type-aliases/LegendType.md)

## Variables

* [ChartContainer](variables/ChartContainer.md)
* [ChartTooltip](variables/ChartTooltip.md)
* [ChartTooltipContent](variables/ChartTooltipContent.md)
* [ChartLegend](variables/ChartLegend.md)
* [ChartLegendContent](variables/ChartLegendContent.md)
* [AreaChart](variables/AreaChart.md)
* [BarChart](variables/BarChart.md)
* [ComposedChart](variables/ComposedChart.md)
* [FunnelChart](variables/FunnelChart.md)
* [LineChart](variables/LineChart.md)
* [PieChart](variables/PieChart.md)
* [RadarChart](variables/RadarChart.md)
* [RadialBarChart](variables/RadialBarChart.md)
* [ScatterChart](variables/ScatterChart.md)
* [SunburstChart](variables/SunburstChart.md)
* [Cell](variables/Cell.md)
* [DefaultTooltipContent](variables/DefaultTooltipContent.md)
* [ResponsiveContainer](variables/ResponsiveContainer.md)
* [Text](variables/Text.md)
* [Layer](variables/Layer.md)
* [PolarGrid](variables/PolarGrid.md)
* [Cross](variables/Cross.md)
* [Curve](variables/Curve.md)
* [Dot](variables/Dot.md)
* [Polygon](variables/Polygon.md)
* [Rectangle](variables/Rectangle.md)
* [Sector](variables/Sector.md)
* [Symbols](variables/Symbols.md)
* [Trapezoid](variables/Trapezoid.md)
* [Global](variables/Global.md)

## Functions

* [ChartStyle](functions/ChartStyle.md)
* [CartesianGrid](functions/CartesianGrid.md)
* [Customized](functions/Customized.md)
* [Label](functions/Label.md)
* [LabelList](functions/LabelList.md)
* [Surface](functions/Surface.md)
