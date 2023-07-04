export const getGreetings = () => {
    const hr = new Date().getHours();
  
    if (hr >= 0o0 && hr <= 11) return "Morning";
    if (hr >= 12 && hr <= 16) return "Afternoon";
    if (hr >= 17 && hr <= 20) return "Evening";
    if (hr >= 21 && hr <= 24) return "Night";
  
    return "Hello";
  };