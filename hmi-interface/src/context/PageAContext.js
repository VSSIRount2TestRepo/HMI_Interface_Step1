import { createContext } from 'react'

//toggling to false will show two image boxes. Otherwise, four image boxes.
const PageAContext = createContext({
    viewMoreToggle: false
});

export default PageAContext;