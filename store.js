import { defineStore } from 'pinia';

export const useStore = defineStore('people', {
    state: () => ({
        solutions: [
          {
            name: 'Plastic seal + nylon insert',
            description: 'Tamper proof high securit cable seal',
            img: '/images/0e7258b4-5037-4649-b1dc-5d482ffdb220.jpg',
            id: '1',
          },
          {
            name: 'Cable seal',
            description: 'Tamper evident plastic security seal for container',
            img: '/images/7ad1ff16-3e97-4ea9-bbb7-edfa5a159775.jpg',
            id: '2',
          },
          {
            name: 'Plastic seal + metal insert',
            description: 'High quality security cable safety locks container seal',
            img: '/images/65ae1f0c-ea10-4e41-826b-3132d0661243.jpg',
            id: '3',
          },
          {
            name: 'Cable seal',
            description: 'ABS + steel line',
            img: '/images/76c7f682-0b89-4c27-ac44-18e9baebb8a8.jpg',
            id: '4',
          },
          {
            name: 'Cable seal',
            description: 'Alloy + steel line',
            img: '/images/1887a12e-ce05-45e1-a0e1-1bf531a1f3d5.jpg',
            id: '5',
          },
          {
            name: 'Plastic seal + metal locking',
            description: 'PP + steel',
            img: '/images/b4d9aa8e-1fc8-4bf3-bb8a-4b8bec837644.jpg',
            id: '6',
          },
        ],
    }),

    actions: {
      fetchSolutions() {
        this.solutions
      }
    }
})