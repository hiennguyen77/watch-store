
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutHome from "./Components/Layout/LayoutHome/LayoutHome";
import { publicRoutes } from "./Routes/index";



function App() {
  
 
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = LayoutHome;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  
                    
                  <Page/>
                    
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
