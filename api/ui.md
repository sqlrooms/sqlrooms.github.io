---
url: /api/ui.md
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
import {useToast, useDisclosure} from '@sqlrooms/ui';

function MyComponent() {
  const {toast} = useToast();
  const {isOpen, onOpen, onClose} = useDisclosure();

  const handleAction = () => {
    // Perform some action
    toast({
      title: 'Success!',
      description: 'Your action was completed successfully.',
      variant: 'success',
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
* [Dimensions](interfaces/Dimensions.md)
* [UseAspectRatioDimensionsProps](interfaces/UseAspectRatioDimensionsProps.md)
* [UseDisclosureReturnValue](interfaces/UseDisclosureReturnValue.md)

## Type Aliases

* [CalendarProps](type-aliases/CalendarProps.md)
* [ToastProps](type-aliases/ToastProps.md)
* [ToastActionElement](type-aliases/ToastActionElement.md)
* [TreeNodeData](type-aliases/TreeNodeData.md)

## Functions

* [CollapsibleTrigger](functions/CollapsibleTrigger.md)
* [CollapsibleContent](functions/CollapsibleContent.md)
* [Collapsible](functions/Collapsible.md)
* [Slot](functions/Slot.md)
* [Accordion](functions/Accordion.md)
* [AccordionItem](functions/AccordionItem.md)
* [AccordionTrigger](functions/AccordionTrigger.md)
* [AccordionContent](functions/AccordionContent.md)
* [Alert](functions/Alert.md)
* [AlertTitle](functions/AlertTitle.md)
* [AlertDescription](functions/AlertDescription.md)
* [AspectRatio](functions/AspectRatio.md)
* [badgeVariants](functions/badgeVariants.md)
* [Badge](functions/Badge.md)
* [Breadcrumb](functions/Breadcrumb.md)
* [BreadcrumbList](functions/BreadcrumbList.md)
* [BreadcrumbItem](functions/BreadcrumbItem.md)
* [BreadcrumbLink](functions/BreadcrumbLink.md)
* [BreadcrumbPage](functions/BreadcrumbPage.md)
* [BreadcrumbSeparator](functions/BreadcrumbSeparator.md)
* [BreadcrumbEllipsis](functions/BreadcrumbEllipsis.md)
* [buttonVariants](functions/buttonVariants.md)
* [Button](functions/Button.md)
* [Calendar](functions/Calendar.md)
* [Card](functions/Card.md)
* [CardHeader](functions/CardHeader.md)
* [CardTitle](functions/CardTitle.md)
* [CardDescription](functions/CardDescription.md)
* [CardContent](functions/CardContent.md)
* [CardFooter](functions/CardFooter.md)
* [Checkbox](functions/Checkbox.md)
* [ComboboxDemo](functions/ComboboxDemo.md)
* [Command](functions/Command.md)
* [CommandDialog](functions/CommandDialog.md)
* [CommandInput](functions/CommandInput.md)
* [CommandList](functions/CommandList.md)
* [CommandEmpty](functions/CommandEmpty.md)
* [CommandGroup](functions/CommandGroup.md)
* [CommandSeparator](functions/CommandSeparator.md)
* [CommandItem](functions/CommandItem.md)
* [CommandShortcut](functions/CommandShortcut.md)
* [ContextMenu](functions/ContextMenu.md)
* [ContextMenuTrigger](functions/ContextMenuTrigger.md)
* [ContextMenuGroup](functions/ContextMenuGroup.md)
* [ContextMenuPortal](functions/ContextMenuPortal.md)
* [ContextMenuSub](functions/ContextMenuSub.md)
* [ContextMenuRadioGroup](functions/ContextMenuRadioGroup.md)
* [ContextMenuSubTrigger](functions/ContextMenuSubTrigger.md)
* [ContextMenuSubContent](functions/ContextMenuSubContent.md)
* [ContextMenuContent](functions/ContextMenuContent.md)
* [ContextMenuItem](functions/ContextMenuItem.md)
* [ContextMenuCheckboxItem](functions/ContextMenuCheckboxItem.md)
* [ContextMenuRadioItem](functions/ContextMenuRadioItem.md)
* [ContextMenuLabel](functions/ContextMenuLabel.md)
* [ContextMenuSeparator](functions/ContextMenuSeparator.md)
* [ContextMenuShortcut](functions/ContextMenuShortcut.md)
* [CopyButton](functions/CopyButton.md)
* [Dialog](functions/Dialog.md)
* [DialogTrigger](functions/DialogTrigger.md)
* [DialogPortal](functions/DialogPortal.md)
* [DialogClose](functions/DialogClose.md)
* [DialogOverlay](functions/DialogOverlay.md)
* [DialogContent](functions/DialogContent.md)
* [DialogHeader](functions/DialogHeader.md)
* [DialogFooter](functions/DialogFooter.md)
* [DialogTitle](functions/DialogTitle.md)
* [DialogDescription](functions/DialogDescription.md)
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
* [DropdownMenu](functions/DropdownMenu.md)
* [DropdownMenuTrigger](functions/DropdownMenuTrigger.md)
* [DropdownMenuGroup](functions/DropdownMenuGroup.md)
* [DropdownMenuPortal](functions/DropdownMenuPortal.md)
* [DropdownMenuSub](functions/DropdownMenuSub.md)
* [DropdownMenuRadioGroup](functions/DropdownMenuRadioGroup.md)
* [DropdownMenuSubTrigger](functions/DropdownMenuSubTrigger.md)
* [DropdownMenuSubContent](functions/DropdownMenuSubContent.md)
* [DropdownMenuContent](functions/DropdownMenuContent.md)
* [DropdownMenuItem](functions/DropdownMenuItem.md)
* [DropdownMenuCheckboxItem](functions/DropdownMenuCheckboxItem.md)
* [DropdownMenuRadioItem](functions/DropdownMenuRadioItem.md)
* [DropdownMenuLabel](functions/DropdownMenuLabel.md)
* [DropdownMenuSeparator](functions/DropdownMenuSeparator.md)
* [DropdownMenuShortcut](functions/DropdownMenuShortcut.md)
* [EditableText](functions/EditableText.md)
* [ErrorPane](functions/ErrorPane.md)
* [Form](functions/Form.md)
* [FormField](functions/FormField.md)
* [useFormField](functions/useFormField.md)
* [FormItem](functions/FormItem.md)
* [FormLabel](functions/FormLabel.md)
* [FormControl](functions/FormControl.md)
* [FormDescription](functions/FormDescription.md)
* [FormMessage](functions/FormMessage.md)
* [Input](functions/Input.md)
* [Label](functions/Label.md)
* [MenubarMenu](functions/MenubarMenu.md)
* [MenubarGroup](functions/MenubarGroup.md)
* [MenubarPortal](functions/MenubarPortal.md)
* [MenubarRadioGroup](functions/MenubarRadioGroup.md)
* [MenubarSub](functions/MenubarSub.md)
* [Menubar](functions/Menubar.md)
* [MenubarTrigger](functions/MenubarTrigger.md)
* [MenubarSubTrigger](functions/MenubarSubTrigger.md)
* [MenubarSubContent](functions/MenubarSubContent.md)
* [MenubarContent](functions/MenubarContent.md)
* [MenubarItem](functions/MenubarItem.md)
* [MenubarCheckboxItem](functions/MenubarCheckboxItem.md)
* [MenubarRadioItem](functions/MenubarRadioItem.md)
* [MenubarLabel](functions/MenubarLabel.md)
* [MenubarSeparator](functions/MenubarSeparator.md)
* [MenubarShortcut](functions/MenubarShortcut.md)
* [Pagination](functions/Pagination.md)
* [PaginationContent](functions/PaginationContent.md)
* [PaginationItem](functions/PaginationItem.md)
* [PaginationLink](functions/PaginationLink.md)
* [PaginationPrevious](functions/PaginationPrevious.md)
* [PaginationNext](functions/PaginationNext.md)
* [PaginationEllipsis](functions/PaginationEllipsis.md)
* [Popover](functions/Popover.md)
* [PopoverTrigger](functions/PopoverTrigger.md)
* [PopoverAnchor](functions/PopoverAnchor.md)
* [PopoverContent](functions/PopoverContent.md)
* [ProgressModal](functions/ProgressModal.md)
* [Progress](functions/Progress.md)
* [RadioGroup](functions/RadioGroup.md)
* [RadioGroupItem](functions/RadioGroupItem.md)
* [ResizablePanelGroup](functions/ResizablePanelGroup.md)
* [ResizablePanel](functions/ResizablePanel.md)
* [ResizableHandle](functions/ResizableHandle.md)
* [ScrollArea](functions/ScrollArea.md)
* [ScrollBar](functions/ScrollBar.md)
* [Select](functions/Select.md)
* [SelectGroup](functions/SelectGroup.md)
* [SelectValue](functions/SelectValue.md)
* [SelectTrigger](functions/SelectTrigger.md)
* [SelectScrollUpButton](functions/SelectScrollUpButton.md)
* [SelectScrollDownButton](functions/SelectScrollDownButton.md)
* [SelectContent](functions/SelectContent.md)
* [SelectLabel](functions/SelectLabel.md)
* [SelectItem](functions/SelectItem.md)
* [SelectSeparator](functions/SelectSeparator.md)
* [Separator](functions/Separator.md)
* [Sheet](functions/Sheet.md)
* [SheetTrigger](functions/SheetTrigger.md)
* [SheetClose](functions/SheetClose.md)
* [SheetPortal](functions/SheetPortal.md)
* [SheetOverlay](functions/SheetOverlay.md)
* [SheetContent](functions/SheetContent.md)
* [SheetHeader](functions/SheetHeader.md)
* [SheetFooter](functions/SheetFooter.md)
* [SheetTitle](functions/SheetTitle.md)
* [SheetDescription](functions/SheetDescription.md)
* [SkeletonPane](functions/SkeletonPane.md)
* [Skeleton](functions/Skeleton.md)
* [Slider](functions/Slider.md)
* [SpinnerPane](functions/SpinnerPane.md)
* [Spinner](functions/Spinner.md)
* [Switch](functions/Switch.md)
* [Table](functions/Table.md)
* [TableHeader](functions/TableHeader.md)
* [TableBody](functions/TableBody.md)
* [TableFooter](functions/TableFooter.md)
* [TableRow](functions/TableRow.md)
* [TableHead](functions/TableHead.md)
* [TableCell](functions/TableCell.md)
* [TableCaption](functions/TableCaption.md)
* [Tabs](functions/Tabs.md)
* [TabsList](functions/TabsList.md)
* [TabsTrigger](functions/TabsTrigger.md)
* [TabsContent](functions/TabsContent.md)
* [Textarea](functions/Textarea.md)
* [ThemeSwitch](functions/ThemeSwitch.md)
* [ToastProvider](functions/ToastProvider.md)
* [ToastViewport](functions/ToastViewport.md)
* [Toast](functions/Toast.md)
* [ToastAction](functions/ToastAction.md)
* [ToastClose](functions/ToastClose.md)
* [ToastTitle](functions/ToastTitle.md)
* [ToastDescription](functions/ToastDescription.md)
* [Toaster](functions/Toaster.md)
* [ToggleGroup](functions/ToggleGroup.md)
* [ToggleGroupItem](functions/ToggleGroupItem.md)
* [toggleVariants](functions/toggleVariants.md)
* [Toggle](functions/Toggle.md)
* [TooltipProvider](functions/TooltipProvider.md)
* [Tooltip](functions/Tooltip.md)
* [TooltipTrigger](functions/TooltipTrigger.md)
* [TooltipContent](functions/TooltipContent.md)
* [Tree](functions/Tree.md)
* [reducer](functions/reducer.md)
* [useToast](functions/useToast.md)
* [useAspectRatioDimensions](functions/useAspectRatioDimensions.md)
* [useDisclosure](functions/useDisclosure.md)
* [useRelativeCoordinates](functions/useRelativeCoordinates.md)
* [cn](functions/cn.md)
* [sqlroomsTailwindPreset](functions/sqlroomsTailwindPreset.md)
* [ThemeProvider](functions/ThemeProvider.md)
* [useTheme](functions/useTheme.md)

## References

### toast

Re-exports [toast](functions/useToast.md#toast)
