---
url: 'https://sqlrooms.org/api/ui.md'
---
# @sqlrooms/ui

A comprehensive UI component library for SQLRooms applications, built on top of React and Tailwind CSS. This package provides a collection of reusable, accessible, and customizable components designed to create consistent and beautiful user interfaces.

This library is based on [shadcn/ui](https://ui.shadcn.com/), a collection of beautifully designed, accessible components that can be copied and pasted into your apps.

## Features

* 🎨 **Modern Design**: Clean, modern components following design best practices
* ♿ **Accessibility**: Components built with accessibility in mind
* 🌗 **Theming**: Support for light and dark modes
* 📱 **Responsive**: Mobile-friendly components that adapt to different screen sizes
* 🧩 **Composable**: Components designed to work together seamlessly
* 🔄 **React Hooks**: Useful hooks for common UI patterns

## Installation

```bash
npm install @sqlrooms/ui
# or
yarn add @sqlrooms/ui
```

## Basic Usage

### Using Components

```tsx
import {Button, Card, Input} from '@sqlrooms/ui';

function LoginForm() {
  return (
    <Card className="mx-auto max-w-md p-6">
      <h2 className="mb-4 text-2xl font-bold">Login</h2>
      <form>
        <div className="space-y-4">
          <div>
            <Input type="email" placeholder="Email" required />
          </div>
          <div>
            <Input type="password" placeholder="Password" required />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </div>
      </form>
    </Card>
  );
}
```

### Using Hooks

```tsx
import {toast, useDisclosure} from '@sqlrooms/ui';

function MyComponent() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const handleAction = () => {
    // Perform some action
    toast.success('Success!', {
      description: 'Your action was completed successfully.',
    });
    onClose();
  };

  return (
    <div>
      <Button onClick={onOpen}>Open Dialog</Button>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to perform this action?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleAction}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
```

## Available Components

* **Layout**: Card, Resizable, Tabs
* **Forms**: Button, Checkbox, Combobox, Input, Select, Slider, Switch, Textarea
* **Feedback**: Alert, Progress, Spinner, Toast
* **Navigation**: Accordion, Breadcrumb, Dropdown Menu, TabStrip
* **Overlay**: Dialog, ModifierScrollOverlay, Popover, Tooltip
* **Data Display**: Badge, Table
* **Utility**: Error Boundary, Theme Switch

## Combobox

Use the compound `Combobox` component for searchable select dropdowns built on
the package's Popover and Command primitives.

```tsx
import {Combobox} from '@sqlrooms/ui';

function MySelector() {
  const [value, setValue] = useState('');
  const options = [
    {value: 'option1', label: 'Option 1'},
    {value: 'option2', label: 'Option 2'},
    {value: 'option3', label: 'Option 3'},
  ];
  const selectedLabel =
    options.find((option) => option.value === value)?.label ?? 'Select option';

  return (
    <Combobox value={value} onChange={setValue}>
      <Combobox.Trigger>
        <span>{selectedLabel}</span>
      </Combobox.Trigger>
      <Combobox.Content
        searchable
        searchPlaceholder="Search..."
        emptyMessage="No results found."
      >
        {options.map((option) => (
          <Combobox.Item key={option.value} value={option.value}>
            <span>{option.label}</span>
          </Combobox.Item>
        ))}
      </Combobox.Content>
    </Combobox>
  );
}
```

Available compound components:

* `Combobox` (root) - Manages state and provides context
* `Combobox.Trigger` - Button to open the dropdown
* `Combobox.Content` - Popover content wrapper
* `Combobox.Item` - Individual selectable item

For advanced composition, the lower-level `useCombobox` hook is also exported.

## Advanced Features

* **Component Composition**: Build complex UIs by composing simple components
* **Form Handling**: Integrated with React Hook Form for easy form management
* **Custom Styling**: Extend components with custom styles using Tailwind CSS
* **Animation**: Smooth transitions and animations for interactive elements

## TabStrip

`TabStrip` supports a `fontSize` prop for sizing tab labels, inline rename
inputs, search dropdown content, and built-in subcomponents consistently:

```tsx
<TabStrip
  tabs={tabs}
  openTabs={openTabs}
  selectedTabId={selectedTabId}
  fontSize="12px"
/>
```

Use `renderSearchItemLabel` when the search dropdown should show custom row
content, such as a status spinner next to a tab name.

For more information, visit the SQLRooms documentation.

## Classes

* [ErrorBoundary](/api/ui/classes/ErrorBoundary.md)

## Interfaces

* [BadgeProps](/api/ui/interfaces/BadgeProps.md)
* [ButtonProps](/api/ui/interfaces/ButtonProps.md)
* [ComboboxTriggerProps](/api/ui/interfaces/ComboboxTriggerProps.md)
* [ComboboxContentProps](/api/ui/interfaces/ComboboxContentProps.md)
* [ComboboxItemProps](/api/ui/interfaces/ComboboxItemProps.md)
* [CopyButtonProps](/api/ui/interfaces/CopyButtonProps.md)
* [TabDescriptor](/api/ui/interfaces/TabDescriptor.md)
* [TabStripProps](/api/ui/interfaces/TabStripProps.md)
* [Dimensions](/api/ui/interfaces/Dimensions.md)
* [UseAspectRatioDimensionsProps](/api/ui/interfaces/UseAspectRatioDimensionsProps.md)
* [UseComboboxOptions](/api/ui/interfaces/UseComboboxOptions.md)
* [UseComboboxReturn](/api/ui/interfaces/UseComboboxReturn.md)
* [UseDisclosureReturnValue](/api/ui/interfaces/UseDisclosureReturnValue.md)

## Type Aliases

* [CalendarProps](/api/ui/type-aliases/CalendarProps.md)
* [ComboboxRootProps](/api/ui/type-aliases/ComboboxRootProps.md)
* [ModifierScrollOverlayProps](/api/ui/type-aliases/ModifierScrollOverlayProps.md)
* [ResizablePanelOrientation](/api/ui/type-aliases/ResizablePanelOrientation.md)
* [RunButtonProps](/api/ui/type-aliases/RunButtonProps.md)
* [TabStripDndMode](/api/ui/type-aliases/TabStripDndMode.md)
* [TabStripDragData](/api/ui/type-aliases/TabStripDragData.md)
* [TreeNodeData](/api/ui/type-aliases/TreeNodeData.md)
* [FontSizeToken](/api/ui/type-aliases/FontSizeToken.md)
* [Theme](/api/ui/type-aliases/Theme.md)
* [ResolvedTheme](/api/ui/type-aliases/ResolvedTheme.md)

## Variables

* [Accordion](/api/ui/variables/Accordion.md)
* [AccordionItem](/api/ui/variables/AccordionItem.md)
* [AccordionTrigger](/api/ui/variables/AccordionTrigger.md)
* [AccordionContent](/api/ui/variables/AccordionContent.md)
* [Alert](/api/ui/variables/Alert.md)
* [AlertTitle](/api/ui/variables/AlertTitle.md)
* [AlertDescription](/api/ui/variables/AlertDescription.md)
* [AspectRatio](/api/ui/variables/AspectRatio.md)
* [badgeVariants](/api/ui/variables/badgeVariants.md)
* [Breadcrumb](/api/ui/variables/Breadcrumb.md)
* [BreadcrumbList](/api/ui/variables/BreadcrumbList.md)
* [BreadcrumbItem](/api/ui/variables/BreadcrumbItem.md)
* [BreadcrumbLink](/api/ui/variables/BreadcrumbLink.md)
* [BreadcrumbPage](/api/ui/variables/BreadcrumbPage.md)
* [buttonVariants](/api/ui/variables/buttonVariants.md)
* [Button](/api/ui/variables/Button.md)
* [Card](/api/ui/variables/Card.md)
* [CardHeader](/api/ui/variables/CardHeader.md)
* [CardTitle](/api/ui/variables/CardTitle.md)
* [CardDescription](/api/ui/variables/CardDescription.md)
* [CardContent](/api/ui/variables/CardContent.md)
* [CardFooter](/api/ui/variables/CardFooter.md)
* [Checkbox](/api/ui/variables/Checkbox.md)
* [Combobox](/api/ui/variables/Combobox.md)
* [Command](/api/ui/variables/Command.md)
* [CommandInput](/api/ui/variables/CommandInput.md)
* [CommandList](/api/ui/variables/CommandList.md)
* [CommandEmpty](/api/ui/variables/CommandEmpty.md)
* [CommandGroup](/api/ui/variables/CommandGroup.md)
* [CommandSeparator](/api/ui/variables/CommandSeparator.md)
* [CommandItem](/api/ui/variables/CommandItem.md)
* [ContextMenu](/api/ui/variables/ContextMenu.md)
* [ContextMenuTrigger](/api/ui/variables/ContextMenuTrigger.md)
* [ContextMenuGroup](/api/ui/variables/ContextMenuGroup.md)
* [ContextMenuPortal](/api/ui/variables/ContextMenuPortal.md)
* [ContextMenuSub](/api/ui/variables/ContextMenuSub.md)
* [ContextMenuRadioGroup](/api/ui/variables/ContextMenuRadioGroup.md)
* [ContextMenuSubTrigger](/api/ui/variables/ContextMenuSubTrigger.md)
* [ContextMenuSubContent](/api/ui/variables/ContextMenuSubContent.md)
* [ContextMenuContent](/api/ui/variables/ContextMenuContent.md)
* [ContextMenuItem](/api/ui/variables/ContextMenuItem.md)
* [ContextMenuCheckboxItem](/api/ui/variables/ContextMenuCheckboxItem.md)
* [ContextMenuRadioItem](/api/ui/variables/ContextMenuRadioItem.md)
* [ContextMenuLabel](/api/ui/variables/ContextMenuLabel.md)
* [ContextMenuSeparator](/api/ui/variables/ContextMenuSeparator.md)
* [CopyButton](/api/ui/variables/CopyButton.md)
* [Dialog](/api/ui/variables/Dialog.md)
* [DialogTrigger](/api/ui/variables/DialogTrigger.md)
* [DialogPortal](/api/ui/variables/DialogPortal.md)
* [DialogClose](/api/ui/variables/DialogClose.md)
* [DialogOverlay](/api/ui/variables/DialogOverlay.md)
* [DialogContent](/api/ui/variables/DialogContent.md)
* [DialogTitle](/api/ui/variables/DialogTitle.md)
* [DialogDescription](/api/ui/variables/DialogDescription.md)
* [DropdownMenu](/api/ui/variables/DropdownMenu.md)
* [DropdownMenuTrigger](/api/ui/variables/DropdownMenuTrigger.md)
* [DropdownMenuGroup](/api/ui/variables/DropdownMenuGroup.md)
* [DropdownMenuPortal](/api/ui/variables/DropdownMenuPortal.md)
* [DropdownMenuSub](/api/ui/variables/DropdownMenuSub.md)
* [DropdownMenuRadioGroup](/api/ui/variables/DropdownMenuRadioGroup.md)
* [DropdownMenuSubTrigger](/api/ui/variables/DropdownMenuSubTrigger.md)
* [DropdownMenuSubContent](/api/ui/variables/DropdownMenuSubContent.md)
* [DropdownMenuContent](/api/ui/variables/DropdownMenuContent.md)
* [DropdownMenuItem](/api/ui/variables/DropdownMenuItem.md)
* [DropdownMenuCheckboxItem](/api/ui/variables/DropdownMenuCheckboxItem.md)
* [DropdownMenuRadioItem](/api/ui/variables/DropdownMenuRadioItem.md)
* [DropdownMenuLabel](/api/ui/variables/DropdownMenuLabel.md)
* [DropdownMenuSeparator](/api/ui/variables/DropdownMenuSeparator.md)
* [EditableText](/api/ui/variables/EditableText.md)
* [ErrorPane](/api/ui/variables/ErrorPane.md)
* [Form](/api/ui/variables/Form.md)
* [FormItem](/api/ui/variables/FormItem.md)
* [FormLabel](/api/ui/variables/FormLabel.md)
* [FormControl](/api/ui/variables/FormControl.md)
* [FormDescription](/api/ui/variables/FormDescription.md)
* [FormMessage](/api/ui/variables/FormMessage.md)
* [Input](/api/ui/variables/Input.md)
* [Label](/api/ui/variables/Label.md)
* [Menubar](/api/ui/variables/Menubar.md)
* [MenubarTrigger](/api/ui/variables/MenubarTrigger.md)
* [MenubarSubTrigger](/api/ui/variables/MenubarSubTrigger.md)
* [MenubarSubContent](/api/ui/variables/MenubarSubContent.md)
* [MenubarContent](/api/ui/variables/MenubarContent.md)
* [MenubarItem](/api/ui/variables/MenubarItem.md)
* [MenubarCheckboxItem](/api/ui/variables/MenubarCheckboxItem.md)
* [MenubarRadioItem](/api/ui/variables/MenubarRadioItem.md)
* [MenubarLabel](/api/ui/variables/MenubarLabel.md)
* [MenubarSeparator](/api/ui/variables/MenubarSeparator.md)
* [ModifierScrollOverlay](/api/ui/variables/ModifierScrollOverlay.md)
* [PaginationContent](/api/ui/variables/PaginationContent.md)
* [PaginationItem](/api/ui/variables/PaginationItem.md)
* [Popover](/api/ui/variables/Popover.md)
* [PopoverTrigger](/api/ui/variables/PopoverTrigger.md)
* [PopoverAnchor](/api/ui/variables/PopoverAnchor.md)
* [PopoverContent](/api/ui/variables/PopoverContent.md)
* [ProgressModal](/api/ui/variables/ProgressModal.md)
* [Progress](/api/ui/variables/Progress.md)
* [RadioGroup](/api/ui/variables/RadioGroup.md)
* [RadioGroupItem](/api/ui/variables/RadioGroupItem.md)
* [ResizablePanel](/api/ui/variables/ResizablePanel.md)
* [RunButton](/api/ui/variables/RunButton.md)
* [ScrollArea](/api/ui/variables/ScrollArea.md)
* [ScrollBar](/api/ui/variables/ScrollBar.md)
* [Select](/api/ui/variables/Select.md)
* [SelectGroup](/api/ui/variables/SelectGroup.md)
* [SelectValue](/api/ui/variables/SelectValue.md)
* [SelectTrigger](/api/ui/variables/SelectTrigger.md)
* [SelectScrollUpButton](/api/ui/variables/SelectScrollUpButton.md)
* [SelectScrollDownButton](/api/ui/variables/SelectScrollDownButton.md)
* [SelectContent](/api/ui/variables/SelectContent.md)
* [SelectLabel](/api/ui/variables/SelectLabel.md)
* [SelectItem](/api/ui/variables/SelectItem.md)
* [SelectSeparator](/api/ui/variables/SelectSeparator.md)
* [Separator](/api/ui/variables/Separator.md)
* [Sheet](/api/ui/variables/Sheet.md)
* [SheetTrigger](/api/ui/variables/SheetTrigger.md)
* [SheetClose](/api/ui/variables/SheetClose.md)
* [SheetPortal](/api/ui/variables/SheetPortal.md)
* [SheetOverlay](/api/ui/variables/SheetOverlay.md)
* [SheetContent](/api/ui/variables/SheetContent.md)
* [SheetTitle](/api/ui/variables/SheetTitle.md)
* [SheetDescription](/api/ui/variables/SheetDescription.md)
* [SkeletonPane](/api/ui/variables/SkeletonPane.md)
* [Slider](/api/ui/variables/Slider.md)
* [SpinnerPane](/api/ui/variables/SpinnerPane.md)
* [Spinner](/api/ui/variables/Spinner.md)
* [Switch](/api/ui/variables/Switch.md)
* [TabStrip](/api/ui/variables/TabStrip.md)
* [Table](/api/ui/variables/Table.md)
* [TableHeader](/api/ui/variables/TableHeader.md)
* [TableBody](/api/ui/variables/TableBody.md)
* [TableFooter](/api/ui/variables/TableFooter.md)
* [TableRow](/api/ui/variables/TableRow.md)
* [TableHead](/api/ui/variables/TableHead.md)
* [TableCell](/api/ui/variables/TableCell.md)
* [TableCaption](/api/ui/variables/TableCaption.md)
* [Tabs](/api/ui/variables/Tabs.md)
* [TabsList](/api/ui/variables/TabsList.md)
* [TabsTrigger](/api/ui/variables/TabsTrigger.md)
* [TabsContent](/api/ui/variables/TabsContent.md)
* [Textarea](/api/ui/variables/Textarea.md)
* [ThemeSwitch](/api/ui/variables/ThemeSwitch.md)
* [ToggleGroup](/api/ui/variables/ToggleGroup.md)
* [ToggleGroupItem](/api/ui/variables/ToggleGroupItem.md)
* [toggleVariants](/api/ui/variables/toggleVariants.md)
* [Toggle](/api/ui/variables/Toggle.md)
* [TooltipProvider](/api/ui/variables/TooltipProvider.md)
* [Tooltip](/api/ui/variables/Tooltip.md)
* [TooltipTrigger](/api/ui/variables/TooltipTrigger.md)
* [TooltipContent](/api/ui/variables/TooltipContent.md)
* [DEFAULT\_THEME](/api/ui/variables/DEFAULT_THEME.md)
* [DEFAULT\_THEME\_STORAGE\_KEY](/api/ui/variables/DEFAULT_THEME_STORAGE_KEY.md)

## Functions

* [Badge](/api/ui/functions/Badge.md)
* [BreadcrumbSeparator](/api/ui/functions/BreadcrumbSeparator.md)
* [BreadcrumbEllipsis](/api/ui/functions/BreadcrumbEllipsis.md)
* [Calendar](/api/ui/functions/Calendar.md)
* [CommandDialog](/api/ui/functions/CommandDialog.md)
* [CommandShortcut](/api/ui/functions/CommandShortcut.md)
* [ContextMenuShortcut](/api/ui/functions/ContextMenuShortcut.md)
* [DialogHeader](/api/ui/functions/DialogHeader.md)
* [DialogFooter](/api/ui/functions/DialogFooter.md)
* [Drawer](/api/ui/functions/Drawer.md)
* [DrawerTrigger](/api/ui/functions/DrawerTrigger.md)
* [DrawerPortal](/api/ui/functions/DrawerPortal.md)
* [DrawerClose](/api/ui/functions/DrawerClose.md)
* [DrawerHandle](/api/ui/functions/DrawerHandle.md)
* [DrawerOverlay](/api/ui/functions/DrawerOverlay.md)
* [DrawerContent](/api/ui/functions/DrawerContent.md)
* [DrawerHeader](/api/ui/functions/DrawerHeader.md)
* [DrawerFooter](/api/ui/functions/DrawerFooter.md)
* [DrawerTitle](/api/ui/functions/DrawerTitle.md)
* [DrawerDescription](/api/ui/functions/DrawerDescription.md)
* [DropdownMenuShortcut](/api/ui/functions/DropdownMenuShortcut.md)
* [FormField](/api/ui/functions/FormField.md)
* [useFormField](/api/ui/functions/useFormField.md)
* [HoverCard](/api/ui/functions/HoverCard.md)
* [HoverCardTrigger](/api/ui/functions/HoverCardTrigger.md)
* [HoverCardContent](/api/ui/functions/HoverCardContent.md)
* [MenubarMenu](/api/ui/functions/MenubarMenu.md)
* [MenubarGroup](/api/ui/functions/MenubarGroup.md)
* [MenubarPortal](/api/ui/functions/MenubarPortal.md)
* [MenubarRadioGroup](/api/ui/functions/MenubarRadioGroup.md)
* [MenubarSub](/api/ui/functions/MenubarSub.md)
* [MenubarShortcut](/api/ui/functions/MenubarShortcut.md)
* [Pagination](/api/ui/functions/Pagination.md)
* [PaginationLink](/api/ui/functions/PaginationLink.md)
* [PaginationPrevious](/api/ui/functions/PaginationPrevious.md)
* [PaginationNext](/api/ui/functions/PaginationNext.md)
* [PaginationEllipsis](/api/ui/functions/PaginationEllipsis.md)
* [ResizablePanelGroup](/api/ui/functions/ResizablePanelGroup.md)
* [ResizableHandle](/api/ui/functions/ResizableHandle.md)
* [ScrollableRow](/api/ui/functions/ScrollableRow.md)
* [SheetHeader](/api/ui/functions/SheetHeader.md)
* [SheetFooter](/api/ui/functions/SheetFooter.md)
* [useSidebar](/api/ui/functions/useSidebar.md)
* [SidebarProvider](/api/ui/functions/SidebarProvider.md)
* [Sidebar](/api/ui/functions/Sidebar.md)
* [SidebarTrigger](/api/ui/functions/SidebarTrigger.md)
* [SidebarRail](/api/ui/functions/SidebarRail.md)
* [SidebarInset](/api/ui/functions/SidebarInset.md)
* [SidebarInput](/api/ui/functions/SidebarInput.md)
* [SidebarHeader](/api/ui/functions/SidebarHeader.md)
* [SidebarFooter](/api/ui/functions/SidebarFooter.md)
* [SidebarSeparator](/api/ui/functions/SidebarSeparator.md)
* [SidebarContent](/api/ui/functions/SidebarContent.md)
* [SidebarGroup](/api/ui/functions/SidebarGroup.md)
* [SidebarGroupLabel](/api/ui/functions/SidebarGroupLabel.md)
* [SidebarGroupAction](/api/ui/functions/SidebarGroupAction.md)
* [SidebarGroupContent](/api/ui/functions/SidebarGroupContent.md)
* [SidebarMenu](/api/ui/functions/SidebarMenu.md)
* [SidebarMenuItem](/api/ui/functions/SidebarMenuItem.md)
* [SidebarMenuButton](/api/ui/functions/SidebarMenuButton.md)
* [SidebarMenuAction](/api/ui/functions/SidebarMenuAction.md)
* [SidebarMenuBadge](/api/ui/functions/SidebarMenuBadge.md)
* [SidebarMenuSkeleton](/api/ui/functions/SidebarMenuSkeleton.md)
* [SidebarMenuSub](/api/ui/functions/SidebarMenuSub.md)
* [SidebarMenuSubItem](/api/ui/functions/SidebarMenuSubItem.md)
* [SidebarMenuSubButton](/api/ui/functions/SidebarMenuSubButton.md)
* [Skeleton](/api/ui/functions/Skeleton.md)
* [Toaster](/api/ui/functions/Toaster.md)
* [Tree](/api/ui/functions/Tree.md)
* [useIsMobile](/api/ui/functions/useIsMobile.md)
* [useAspectRatioDimensions](/api/ui/functions/useAspectRatioDimensions.md)
* [useCombobox](/api/ui/functions/useCombobox.md)
* [useDebounce](/api/ui/functions/useDebounce.md)
* [useDebouncedCallback](/api/ui/functions/useDebouncedCallback.md)
* [useDebouncedValue](/api/ui/functions/useDebouncedValue.md)
* [useDisclosure](/api/ui/functions/useDisclosure.md)
* [useRelativeCoordinates](/api/ui/functions/useRelativeCoordinates.md)
* [resolveFontSizeClass](/api/ui/functions/resolveFontSizeClass.md)
* [cn](/api/ui/functions/cn.md)
* [getThemePreference](/api/ui/functions/getThemePreference.md)
* [getResolvedTheme](/api/ui/functions/getResolvedTheme.md)
* [getTheme](/api/ui/functions/getTheme.md)
* [ThemeProvider](/api/ui/functions/ThemeProvider.md)
* [useTheme](/api/ui/functions/useTheme.md)
