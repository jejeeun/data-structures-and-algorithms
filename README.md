# Data Structures and Algorithms

## Linked List
> 노드가 다음 노드를 가리키며 한 방향으로 연결된 구조

```
head
 ↓
[A] → [B] → [C] → null
```

---

## Doubly Linked List
> 노드가 앞/뒤 양방향으로 연결되어 양쪽 탐색이 가능한 구조

```
        head                          tail
         ↓                             ↓
null ← [A] ↔ [B] ↔ [C] → null
```

---

## Stack (LIFO)
> 가장 나중에 넣은 데이터가 먼저 나오는 구조

```
push(1), push(2), push(3)

| 3 |  ← top (pop하면 3이 먼저 나옴)
| 2 |
| 1 |
└───┘
```

---

## Queue (FIFO)
> 가장 먼저 넣은 데이터가 먼저 나오는 구조

```
enqueue(1), enqueue(2), enqueue(3)

front                 rear
  ↓                     ↓
[ 1 ] → [ 2 ] → [ 3 ]

dequeue → 1이 먼저 나옴
```

---

## Deque
> 양쪽 끝에서 삽입/삭제가 모두 가능한 구조

```
addFront / removeFront          addRear / removeRear
        ↕                              ↕
      [ 1 ] ↔ [ 2 ] ↔ [ 3 ]
```

---

## Hash Table
> 키를 해시 함수로 변환해 O(1) 접근이 가능한 구조 (충돌 시 체이닝)

```
set(1, "A"), set(12, "B"), set(123, "C"), set(2, "D")

해시 함수: key % 10

| index | 데이터                              |
|-------|-------------------------------------|
|   0   | 비어있음                             |
|   1   | {key:1, val:"A"}                    |
|   2   | {key:2, val:"D"} ↔ {key:12, val:"B"} |
|   3   | {key:123, val:"C"}                  |
|  ...  | 비어있음                             |
```

---

## Hash Set
> 해시 테이블 기반으로 중복 없이 데이터를 저장하는 구조

```
add(1), add(1), add(12), add(123)  ← 1은 중복이라 한 번만 저장

| index | 데이터                    |
|-------|--------------------------|
|   0   | 비어있음                  |
|   1   | {key:1}                  |
|   2   | {key:12}                 |
|   3   | {key:123}                |
|  ...  | 비어있음                  |
```
