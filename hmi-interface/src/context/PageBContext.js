import { createContext } from 'react';

//toggling to false will show two image boxes. Otherwise, four image boxes.
const PageBContext = createContext({
    viewMoreToggle: false
});

export default PageBContext;