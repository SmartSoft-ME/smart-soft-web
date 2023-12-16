import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/inventory.jpg',
    title: 'Smart inventory',
    rating: 5,
    ratingCount: 8,
    price: 25,
    category: 'Beginner',
  },
  {
    id: 2,
    cover: '/images/courses/accounting.jpg',
    title: 'Smart Accountig',
    rating: 4,
    ratingCount: 7,
    price: 30,
    category: 'Beginner',
  },
  {
    id: 3,
    cover: '/images/invoicing.jpg',
    title: 'Smart invoicing',
    rating: 4,
    ratingCount: 7,
    price: 30,
    category: 'Beginner',
  }
]
