# Servora UI Components

A collection of reusable UI components built with React and Tailwind CSS. This library provides a comprehensive set of modern, accessible, and customizable components for building beautiful user interfaces.

## Features

- 🎨 **Modern Design**: Clean and contemporary component designs
- ♿ **Accessible**: Built with accessibility in mind using Radix UI primitives
- 🎯 **TypeScript**: Full TypeScript support with proper type definitions
- 🎨 **Tailwind CSS**: Styled with Tailwind CSS for easy customization
- 📦 **Tree Shakeable**: Optimized bundle size with tree shaking support
- 🔧 **Customizable**: Flexible theming and styling options

## Installation

```bash
npm install servora-ui-components
```

## Peer Dependencies

Make sure you have the following peer dependencies installed:

```bash
npm install react react-dom tailwindcss
```

## Usage

```tsx
import { Button, Card, Input, Badge } from 'servora-ui-components';

function App() {
  return (
    <div className="p-4">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <Input placeholder="Enter your name" className="mb-4" />
        <div className="flex gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
        <Badge className="mt-4">Status</Badge>
      </Card>
    </div>
  );
}
```

## Components

### Basic Components

- **Button** - Various button styles and variants
- **Input** - Form input component
- **Label** - Form label component
- **Checkbox** - Checkbox input component
- **Select** - Dropdown select component
- **Textarea** - Multi-line text input

### Layout Components

- **Card** - Container component for content
- **Separator** - Visual divider component
- **Sheet** - Side panel component
- **Scroll Area** - Custom scrollable area

### Navigation Components

- **Navigation Menu** - Main navigation component
- **Dropdown Menu** - Context menu component

### Feedback Components

- **Dialog** - Modal dialog component
- **Tooltip** - Hover tooltip component
- **Badge** - Status indicator component
- **Avatar** - User profile image component

### Specialized Components

- **Animated Tooltip** - Enhanced tooltip with animations
- **Cover** - Image cover component
- **Command** - Command palette component
- **Sparkles** - Animated sparkle effects
- **Table** - Data table component

### Carousel Components

- **Basic Carousel** - Simple image/content carousel
- **Carousel with Custom Indicators** - Carousel with custom navigation
- **Carousel with Custom Sizes** - Carousel with flexible sizing

### Navigation Components

- **Circular Navigation** - Circular navigation menu
- **Floating Dock** - Floating navigation dock

### Slider Components

- **Horizontal Slider** - Horizontal infinite slider
- **Vertical Slider** - Vertical infinite slider

### Velocity Scroll Components

- **Scroll Velocity Images** - Image-based velocity scrolling
- **Scroll Velocity Text** - Text-based velocity scrolling

### Utility Components

- **Loader Button** - Button with loading states
- **Loader Button Variants** - Various loader button styles

## Styling

All components are styled with Tailwind CSS classes. You can customize the appearance by:

1. **Using className prop**: Add custom classes to override default styles
2. **CSS Variables**: Modify CSS custom properties for theming
3. **Tailwind Config**: Extend your Tailwind configuration

```tsx
// Custom styling example
<Button 
  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg"
>
  Custom Button
</Button>
```

## TypeScript Support

This library is built with TypeScript and provides full type definitions:

```tsx
import { ButtonProps } from 'servora-ui-components';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Development

### Building

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

### Linting

```bash
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Repository

- **GitHub**: [servora-systems/ui-components](https://github.com/servora-systems/ui-components)
- **NPM**: [servora-ui-components](https://www.npmjs.com/package/servora-ui-components)

## Support

For support, please open an issue on GitHub or contact the development team.

---

Built with ❤️ by the Servora Systems team
