test('Exemplo de mock de função', () => {
  const mockCallback = jest.fn(x => 42 + x);
  expect(mockCallback(1)).toBe(43);
  expect(mockCallback).toHaveBeenCalledWith(1);
});