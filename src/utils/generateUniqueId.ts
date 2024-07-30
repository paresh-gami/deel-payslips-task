export const generateUniqueId = (): string => {
    const timestamp = Date.now().toString(36); // Convert current timestamp to a base-36 string
    const randomString = Math.random().toString(36).substring(2, 15); // Generate a random base-36 string
    return `${timestamp}-${randomString}`;
  };
  