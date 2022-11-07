import { atom } from 'recoil';

export const isPointAtom = atom({
    key: 'isPoint',
    default: true,
})

// Atom은 상태(state)의 일부를 나타낸다. Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있고
// atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다.
// 그래서 atom에 어떤 변화가 발생한다면 그 atom을 구독하는 모든 컴포넌트 들이 리렌더링 하게된다.