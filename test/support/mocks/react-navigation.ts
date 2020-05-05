jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    setOptions: () => jest.fn(),
    navigate: () => jest.fn(),
    // Add more mocks as you use them
  }),
  useRoute: () => jest.fn(),
}));
