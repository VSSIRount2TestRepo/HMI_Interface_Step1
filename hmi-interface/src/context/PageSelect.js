import { createContext } from 'react';

//toggling to false will show two image boxes. Otherwise, four image boxes.
const PageSelect = createContext({
    isPageAView: true
});

export default PageSelect;