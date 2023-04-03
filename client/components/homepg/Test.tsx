import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}

export default function Test() {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

const itemData = [
  {
    img: './images/8.png',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: './images/10.png',
    title: 'Burger',
  },
  {
    img: './images/8.png',
    title: 'Camera',
  },
  {
    img: './images/10.png',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: './images/8.png',
    title: 'Hats',
    cols: 2,
  },
  {
    img: './images/10.png',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: './images/8.png',
    title: 'Basketball',
  },
  {
    img: './images/10.png',
    title: 'Fern',
  },
  {
    img: './images/8.png',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: './images/10.png',
    title: 'Tomato basil',
  },
  {
    img: './images/8.png',
    title: 'Sea star',
  },
  {
    img: './images/10.png',
    title: 'Bike',
    cols: 2,
  },
]
