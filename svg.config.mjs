export default {
    multipass: true, // Make multiple passes for optimization
    js2svg: {
      pretty: true, // Keep the SVG readable in development
      indent: 2,    // Use 2 spaces for indentation
    },
    plugins: [
      { name: 'preset-default' }, // Use default optimization plugins
    ],
  };
