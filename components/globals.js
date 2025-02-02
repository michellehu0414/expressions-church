const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  };
  
  export const appName = 'globals';
  export function sayHello() {
      console.log('Hello, world!');
  }
  
  export { breakpoints }; // Exporting the breakpoints object
  