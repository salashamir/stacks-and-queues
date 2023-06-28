const Stack = require("./stack");

let stack;

beforeEach(() => {
  stack = new Stack();
});

describe("push", () => {
  it("places the val at the top of the stack, returns undefined", () => {
    expect(stack.push(5)).toBe(undefined);
    expect(stack.first.val).toBe(5);
    expect(stack.last.val).toBe(5);
    expect(stack.push(46)).toBe(undefined);
    expect(stack.first.val).toBe(46);
    expect(stack.last.val).toBe(5);
  });
});

describe("pop", () => {
  it("returns val of node popped", () => {
    stack.push(5);
    stack.push(20);
    stack.push(45);
    const removed = stack.pop();
    expect(removed).toBe(45);
    expect(stack.size).toBe(2);
    stack.pop();
    stack.pop();
    expect(stack.size).toBe(0);
  });

  it("throws err for empty stack", () => {
    expect(() => stack.pop()).toThrow(Error);
  });
});

describe("peek", () => {
  it("returns val at the top of stack", () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
    stack.push(24);
    expect(stack.peek()).toBe(24);
  });
});

describe("isEmpty", () => {
  it("returns true for an empty stack", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it("returns false for a nonempty stack", () => {
    stack.push(57);
    expect(stack.isEmpty()).toBe(false);
  });
});
