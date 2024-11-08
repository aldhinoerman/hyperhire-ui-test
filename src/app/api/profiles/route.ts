import { NextResponse } from 'next/server';

const profileData = [
  {
    name: 'Abhishek Gupta',
    title: '마케팅 - 2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    image: '/images/profile-photo.png',
    flag: '/images/flag.webp',
  },
  {
    name: 'Abhishek Gupta',
    title: '마케팅 - 2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    image: '/images/profile-photo.png',
    flag: '/images/flag.webp',
  },
  {
    name: 'Abhishek Gupta',
    title: '마케팅 - 2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    image: '/images/profile-photo.png',
    flag: '/images/flag.webp',
  },
];

export async function GET() {
  return NextResponse.json(profileData);
}
