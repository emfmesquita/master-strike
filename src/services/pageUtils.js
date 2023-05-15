export const numberOfColumns = component => {
  const expandedSideBar = !component.$store.getters.sideBarCollapsed;
  switch (component.$vuetify.breakpoint.name) {
    case 'xs': return 1
    case 'sm': return expandedSideBar ? 1 : 2
    case 'md': return expandedSideBar ? 2 : 3
    case 'lg': return 4
    case 'xl': return 6
  }
  return 4;
}

export const pages = (cards, pageSize) => {
  const numberOfPages = Math.ceil(cards.length / pageSize);
  const pages = [];
  for (let pageNumber = 0; pageNumber < numberOfPages; pageNumber++) {
    const page = [];
    for (let column = 0; column < pageSize; column++) {
      const card = cards[pageNumber * pageSize + column];
      if(card) page.push(card);
    }
    pages.push(page);
  }
  return pages;
}