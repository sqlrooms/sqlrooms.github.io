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
* **Forms**: Button, Checkbox, Input, Select, Slider, Switch, Textarea
* **Feedback**: Alert, Progress, Spinner, Toast
* **Navigation**: Accordion, Breadcrumb, Dropdown Menu
* **Overlay**: Dialog, Popover, Tooltip
* **Data Display**: Badge, Table
* **Utility**: Error Boundary, Theme Switch

## Advanced Features

* **Component Composition**: Build complex UIs by composing simple components
* **Form Handling**: Integrated with React Hook Form for easy form management
* **Custom Styling**: Extend components with custom styles using Tailwind CSS
* **Animation**: Smooth transitions and animations for interactive elements

For more information, visit the SQLRooms documentation.

## Classes

* [ErrorBoundary](classes/ErrorBoundary.md)

## Interfaces

* [BadgeProps](interfaces/BadgeProps.md)
* [ButtonProps](interfaces/ButtonProps.md)
* [CopyButtonProps](interfaces/CopyButtonProps.md)
* [TabDescriptor](interfaces/TabDescriptor.md)
* [TabStripProps](interfaces/TabStripProps.md)
* [Dimensions](interfaces/Dimensions.md)
* [UseAspectRatioDimensionsProps](interfaces/UseAspectRatioDimensionsProps.md)
* [UseDisclosureReturnValue](interfaces/UseDisclosureReturnValue.md)

## Type Aliases

* [CalendarProps](type-aliases/CalendarProps.md)
* [ToastProps](type-aliases/ToastProps.md)
* [ToastActionElement](type-aliases/ToastActionElement.md)
* [TreeNodeData](type-aliases/TreeNodeData.md)
* [FontSizeToken](type-aliases/FontSizeToken.md)
* [ExternalToast](type-aliases/ExternalToast.md)

## Variables

* [CollapsibleTrigger](variables/CollapsibleTrigger.md)
* [CollapsibleContent](variables/CollapsibleContent.md)
* [Collapsible](variables/Collapsible.md)
* [Slot](variables/Slot.md)
* [Accordion](variables/Accordion.md)
* [AccordionItem](variables/AccordionItem.md)
* [AccordionTrigger](variables/AccordionTrigger.md)
* [AccordionContent](variables/AccordionContent.md)
* [Alert](variables/Alert.md)
* [AlertTitle](variables/AlertTitle.md)
* [AlertDescription](variables/AlertDescription.md)
* [AspectRatio](variables/AspectRatio.md)
* [badgeVariants](variables/badgeVariants.md)
* [Breadcrumb](variables/Breadcrumb.md)
* [BreadcrumbList](variables/BreadcrumbList.md)
* [BreadcrumbItem](variables/BreadcrumbItem.md)
* [BreadcrumbLink](variables/BreadcrumbLink.md)
* [BreadcrumbPage](variables/BreadcrumbPage.md)
* [buttonVariants](variables/buttonVariants.md)
* [Button](variables/Button.md)
* [Card](variables/Card.md)
* [CardHeader](variables/CardHeader.md)
* [CardTitle](variables/CardTitle.md)
* [CardDescription](variables/CardDescription.md)
* [CardContent](variables/CardContent.md)
* [CardFooter](variables/CardFooter.md)
* [Checkbox](variables/Checkbox.md)
* [Command](variables/Command.md)
* [CommandInput](variables/CommandInput.md)
* [CommandList](variables/CommandList.md)
* [CommandEmpty](variables/CommandEmpty.md)
* [CommandGroup](variables/CommandGroup.md)
* [CommandSeparator](variables/CommandSeparator.md)
* [CommandItem](variables/CommandItem.md)
* [ContextMenu](variables/ContextMenu.md)
* [ContextMenuTrigger](variables/ContextMenuTrigger.md)
* [ContextMenuGroup](variables/ContextMenuGroup.md)
* [ContextMenuPortal](variables/ContextMenuPortal.md)
* [ContextMenuSub](variables/ContextMenuSub.md)
* [ContextMenuRadioGroup](variables/ContextMenuRadioGroup.md)
* [ContextMenuSubTrigger](variables/ContextMenuSubTrigger.md)
* [ContextMenuSubContent](variables/ContextMenuSubContent.md)
* [ContextMenuContent](variables/ContextMenuContent.md)
* [ContextMenuItem](variables/ContextMenuItem.md)
* [ContextMenuCheckboxItem](variables/ContextMenuCheckboxItem.md)
* [ContextMenuRadioItem](variables/ContextMenuRadioItem.md)
* [ContextMenuLabel](variables/ContextMenuLabel.md)
* [ContextMenuSeparator](variables/ContextMenuSeparator.md)
* [CopyButton](variables/CopyButton.md)
* [Dialog](variables/Dialog.md)
* [DialogTrigger](variables/DialogTrigger.md)
* [DialogPortal](variables/DialogPortal.md)
* [DialogClose](variables/DialogClose.md)
* [DialogOverlay](variables/DialogOverlay.md)
* [DialogContent](variables/DialogContent.md)
* [DialogTitle](variables/DialogTitle.md)
* [DialogDescription](variables/DialogDescription.md)
* [DropdownMenu](variables/DropdownMenu.md)
* [DropdownMenuTrigger](variables/DropdownMenuTrigger.md)
* [DropdownMenuGroup](variables/DropdownMenuGroup.md)
* [DropdownMenuPortal](variables/DropdownMenuPortal.md)
* [DropdownMenuSub](variables/DropdownMenuSub.md)
* [DropdownMenuRadioGroup](variables/DropdownMenuRadioGroup.md)
* [DropdownMenuSubTrigger](variables/DropdownMenuSubTrigger.md)
* [DropdownMenuSubContent](variables/DropdownMenuSubContent.md)
* [DropdownMenuContent](variables/DropdownMenuContent.md)
* [DropdownMenuItem](variables/DropdownMenuItem.md)
* [DropdownMenuCheckboxItem](variables/DropdownMenuCheckboxItem.md)
* [DropdownMenuRadioItem](variables/DropdownMenuRadioItem.md)
* [DropdownMenuLabel](variables/DropdownMenuLabel.md)
* [DropdownMenuSeparator](variables/DropdownMenuSeparator.md)
* [EditableText](variables/EditableText.md)
* [ErrorPane](variables/ErrorPane.md)
* [Form](variables/Form.md)
* [FormItem](variables/FormItem.md)
* [FormLabel](variables/FormLabel.md)
* [FormControl](variables/FormControl.md)
* [FormDescription](variables/FormDescription.md)
* [FormMessage](variables/FormMessage.md)
* [Input](variables/Input.md)
* [Label](variables/Label.md)
* [Menubar](variables/Menubar.md)
* [MenubarTrigger](variables/MenubarTrigger.md)
* [MenubarSubTrigger](variables/MenubarSubTrigger.md)
* [MenubarSubContent](variables/MenubarSubContent.md)
* [MenubarContent](variables/MenubarContent.md)
* [MenubarItem](variables/MenubarItem.md)
* [MenubarCheckboxItem](variables/MenubarCheckboxItem.md)
* [MenubarRadioItem](variables/MenubarRadioItem.md)
* [MenubarLabel](variables/MenubarLabel.md)
* [MenubarSeparator](variables/MenubarSeparator.md)
* [PaginationContent](variables/PaginationContent.md)
* [PaginationItem](variables/PaginationItem.md)
* [Popover](variables/Popover.md)
* [PopoverTrigger](variables/PopoverTrigger.md)
* [PopoverAnchor](variables/PopoverAnchor.md)
* [PopoverContent](variables/PopoverContent.md)
* [ProgressModal](variables/ProgressModal.md)
* [Progress](variables/Progress.md)
* [RadioGroup](variables/RadioGroup.md)
* [RadioGroupItem](variables/RadioGroupItem.md)
* [ResizablePanel](variables/ResizablePanel.md)
* [ScrollArea](variables/ScrollArea.md)
* [ScrollBar](variables/ScrollBar.md)
* [Select](variables/Select.md)
* [SelectGroup](variables/SelectGroup.md)
* [SelectValue](variables/SelectValue.md)
* [SelectTrigger](variables/SelectTrigger.md)
* [SelectScrollUpButton](variables/SelectScrollUpButton.md)
* [SelectScrollDownButton](variables/SelectScrollDownButton.md)
* [SelectContent](variables/SelectContent.md)
* [SelectLabel](variables/SelectLabel.md)
* [SelectItem](variables/SelectItem.md)
* [SelectSeparator](variables/SelectSeparator.md)
* [Separator](variables/Separator.md)
* [Sheet](variables/Sheet.md)
* [SheetTrigger](variables/SheetTrigger.md)
* [SheetClose](variables/SheetClose.md)
* [SheetPortal](variables/SheetPortal.md)
* [SheetOverlay](variables/SheetOverlay.md)
* [SheetContent](variables/SheetContent.md)
* [SheetTitle](variables/SheetTitle.md)
* [SheetDescription](variables/SheetDescription.md)
* [SkeletonPane](variables/SkeletonPane.md)
* [Slider](variables/Slider.md)
* [SpinnerPane](variables/SpinnerPane.md)
* [Spinner](variables/Spinner.md)
* [Switch](variables/Switch.md)
* [TabStrip](variables/TabStrip.md)
* [Table](variables/Table.md)
* [TableHeader](variables/TableHeader.md)
* [TableBody](variables/TableBody.md)
* [TableFooter](variables/TableFooter.md)
* [TableRow](variables/TableRow.md)
* [TableHead](variables/TableHead.md)
* [TableCell](variables/TableCell.md)
* [TableCaption](variables/TableCaption.md)
* [Tabs](variables/Tabs.md)
* [TabsList](variables/TabsList.md)
* [TabsTrigger](variables/TabsTrigger.md)
* [TabsContent](variables/TabsContent.md)
* [Textarea](variables/Textarea.md)
* [ThemeSwitch](variables/ThemeSwitch.md)
* [ToastProvider](variables/ToastProvider.md)
* [ToastViewport](variables/ToastViewport.md)
* [Toast](variables/Toast.md)
* [ToastAction](variables/ToastAction.md)
* [ToastClose](variables/ToastClose.md)
* [ToastTitle](variables/ToastTitle.md)
* [ToastDescription](variables/ToastDescription.md)
* [ToggleGroup](variables/ToggleGroup.md)
* [ToggleGroupItem](variables/ToggleGroupItem.md)
* [toggleVariants](variables/toggleVariants.md)
* [Toggle](variables/Toggle.md)
* [TooltipProvider](variables/TooltipProvider.md)
* [Tooltip](variables/Tooltip.md)
* [TooltipTrigger](variables/TooltipTrigger.md)
* [TooltipContent](variables/TooltipContent.md)
* [toast](variables/toast-1.md)

## Functions

* [Badge](functions/Badge.md)
* [BreadcrumbSeparator](functions/BreadcrumbSeparator.md)
* [BreadcrumbEllipsis](functions/BreadcrumbEllipsis.md)
* [Calendar](functions/Calendar.md)
* [ComboboxDemo](functions/ComboboxDemo.md)
* [CommandDialog](functions/CommandDialog.md)
* [CommandShortcut](functions/CommandShortcut.md)
* [ContextMenuShortcut](functions/ContextMenuShortcut.md)
* [DialogHeader](functions/DialogHeader.md)
* [DialogFooter](functions/DialogFooter.md)
* [Drawer](functions/Drawer.md)
* [DrawerTrigger](functions/DrawerTrigger.md)
* [DrawerPortal](functions/DrawerPortal.md)
* [DrawerClose](functions/DrawerClose.md)
* [DrawerHandle](functions/DrawerHandle.md)
* [DrawerOverlay](functions/DrawerOverlay.md)
* [DrawerContent](functions/DrawerContent.md)
* [DrawerHeader](functions/DrawerHeader.md)
* [DrawerFooter](functions/DrawerFooter.md)
* [DrawerTitle](functions/DrawerTitle.md)
* [DrawerDescription](functions/DrawerDescription.md)
* [DropdownMenuShortcut](functions/DropdownMenuShortcut.md)
* [FormField](functions/FormField.md)
* [useFormField](functions/useFormField.md)
* [MenubarMenu](functions/MenubarMenu.md)
* [MenubarGroup](functions/MenubarGroup.md)
* [MenubarPortal](functions/MenubarPortal.md)
* [MenubarRadioGroup](functions/MenubarRadioGroup.md)
* [MenubarSub](functions/MenubarSub.md)
* [MenubarShortcut](functions/MenubarShortcut.md)
* [Pagination](functions/Pagination.md)
* [PaginationLink](functions/PaginationLink.md)
* [PaginationPrevious](functions/PaginationPrevious.md)
* [PaginationNext](functions/PaginationNext.md)
* [PaginationEllipsis](functions/PaginationEllipsis.md)
* [ResizablePanelGroup](functions/ResizablePanelGroup.md)
* [ResizableHandle](functions/ResizableHandle.md)
* [ScrollableRow](functions/ScrollableRow.md)
* [SheetHeader](functions/SheetHeader.md)
* [SheetFooter](functions/SheetFooter.md)
* [useSidebar](functions/useSidebar.md)
* [SidebarProvider](functions/SidebarProvider.md)
* [Sidebar](functions/Sidebar.md)
* [SidebarTrigger](functions/SidebarTrigger.md)
* [SidebarRail](functions/SidebarRail.md)
* [SidebarInset](functions/SidebarInset.md)
* [SidebarInput](functions/SidebarInput.md)
* [SidebarHeader](functions/SidebarHeader.md)
* [SidebarFooter](functions/SidebarFooter.md)
* [SidebarSeparator](functions/SidebarSeparator.md)
* [SidebarContent](functions/SidebarContent.md)
* [SidebarGroup](functions/SidebarGroup.md)
* [SidebarGroupLabel](functions/SidebarGroupLabel.md)
* [SidebarGroupAction](functions/SidebarGroupAction.md)
* [SidebarGroupContent](functions/SidebarGroupContent.md)
* [SidebarMenu](functions/SidebarMenu.md)
* [SidebarMenuItem](functions/SidebarMenuItem.md)
* [SidebarMenuButton](functions/SidebarMenuButton.md)
* [SidebarMenuAction](functions/SidebarMenuAction.md)
* [SidebarMenuBadge](functions/SidebarMenuBadge.md)
* [SidebarMenuSkeleton](functions/SidebarMenuSkeleton.md)
* [SidebarMenuSub](functions/SidebarMenuSub.md)
* [SidebarMenuSubItem](functions/SidebarMenuSubItem.md)
* [SidebarMenuSubButton](functions/SidebarMenuSubButton.md)
* [Skeleton](functions/Skeleton.md)
* [Toaster](functions/Toaster.md)
* [Tree](functions/Tree.md)
* [useIsMobile](functions/useIsMobile.md)
* [reducer](functions/reducer.md)
* [legacyToast](functions/legacyToast.md)
* [useToast](functions/useToast.md)
* [useAspectRatioDimensions](functions/useAspectRatioDimensions.md)
* [useDisclosure](functions/useDisclosure.md)
* [useRelativeCoordinates](functions/useRelativeCoordinates.md)
* [resolveFontSizeClass](functions/resolveFontSizeClass.md)
* [cn](functions/cn.md)
* [ThemeProvider](functions/ThemeProvider.md)
* [useTheme](functions/useTheme.md)
