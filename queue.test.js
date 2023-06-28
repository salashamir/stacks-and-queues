const Queue = require("./queue");

let queue;

beforeEach(() => {
  stack = new Queue();
});

describe("enqueue", () => {
  it("places val at end of the queue, returns undefined", () => {
    expect(queue.enqueue(30)).toBe(undefined);
    expect(queue.first.val).toBe(30);
    expect(queue.last.val).toBe(30);
    queue.enqueue(67);
    expect(queue.first.val).toBe(30);
    expect(queue.last.val).toBe(67);
    queue.enqueue(89);
    expect(queue.first.val).toBe(30);
    expect(queue.last.val).toBe(89);
  });
});

describe("dequeue", () => {
  it("returns val of the node removed", () => {
    queue.enqueue(45);
    queue.enqueue(90);
    queue.enqueue(34);
    const removed = queue.dequeue();
    expect(removed).toBe(45);
    expect(queue.size).toBe(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.size).toBe(0);
  });

  it("throws err if queue is empty", () => {
    expect(() => queue.dequeue()).toThrow(Error);
  });
});

describe("peek", () => {
  it("returns val at start opf queue", () => {
    queue.enqueue(12);
    expect(queue.peek()).toBe(12);
    queue.enqueue(67);
    expect(queue.peek()).toBe(67);
  });
});

describe("isEmpty", () => {
  it("returns true for empty queues", () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it("returns false for nonempty queues", () => {
    queue.enqueue(12);
    expect(queue.isEmpty()).toBe(false);
  });
});
