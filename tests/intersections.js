type A = {a: number};
type B = {b: string};
type C = {c: boolean};

type X = A & B;

type Y = {
    y: A & B & C,
};

class Z {
    z: A & C;
}

// ###
[
    {
        type: 'record',
        name: 'A',
        namespace: 'intersections',
        fields: [{name: 'a', type: 'double'}],
    },
    {
        type: 'record',
        name: 'B',
        namespace: 'intersections',
        fields: [{name: 'b', type: 'string'}],
    },
    {
        type: 'record',
        name: 'C',
        namespace: 'intersections',
        fields: [{name: 'c', type: 'boolean'}],
    },
    {
        type: 'record',
        name: 'X',
        namespace: 'intersections',
        fields: [
            {name: 'a', type: 'double'},
            {name: 'b', type: 'string'},
        ],
    },
    {
        type: 'record',
        name: '_A_B_C',
        namespace: 'intersections',
        fields: [
            {name: 'a', type: 'double'},
            {name: 'b', type: 'string'},
            {name: 'c', type: 'boolean'},
        ],
    },
    {
        type: 'record',
        name: 'Y',
        namespace: 'intersections',
        fields: [
            {name: 'y', type: '_A_B_C'},
        ],
    },
    {
        type: 'record',
        name: '_A_C',
        namespace: 'intersections',
        fields: [
            {name: 'a', type: 'double'},
            {name: 'c', type: 'boolean'},
        ],
    },
    {
        type: 'record',
        name: 'Z',
        namespace: 'intersections',
        fields: [
            {name: 'z', type: '_A_C'},
        ],
    },
]
