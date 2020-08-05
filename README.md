# Naive range method for deno 🧗‍♀️

`
range(from:string|number, to:string|number,step:number)
`

```ts
const {range} from range.ts
```

```ts
range(1,10) // [1,2,3,4,5,6,7,8,9,10]
```

```ts
range(1,10,2) // [1,2,3,4,5,6,7,8,9,10]
```


```ts
range("a","z") // [a,b,c,d,e,f,g,h,i,k ... z]
```

```ts
range("A","Z") // [A,B,C,D,E,F,G,H,I, ... Z ]
```