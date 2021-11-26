import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTasks, faUsersCog, faDumpsterFire, faHome, faStore, faShoppingBag, faHandshake,faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import ManageOrder from '../../ManageOrder/ManageOrder';
import AddProducts from '../AddProducts/AddProducts';
import ManageAllOrders from '../../ManageAll/ManageAllOrders';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import ProductsManage from '../../ProductsManage/ProductsManage';
import AdminRoute from '../../Login/Login/AdminRoute/AdminRoute';
import Review from '../../Review/Review';
import Pay from '../../Pay/Pay';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import './MainBoard.css'




const drawerWidth = 240;

function MainBorad(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin, logOut} = useAuth();
  console.log(admin);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
       
    { admin ?
        <Box className="d-grid" >
          <Link className="link-side" to ='/'> <FontAwesomeIcon icon={faHome} /> Home</Link> 
          
          <Link className="link-side" to ={`${url}/allorders`}> <FontAwesomeIcon icon={faTasks} /> Manage all Orders</Link> 

          <Link className="link-side" to ={`${url}/makeadmin`}> <FontAwesomeIcon icon={faUsersCog} /> Make Admin </Link> 

          <Link className="link-side" to ={`${url}/addproduct`}> <FontAwesomeIcon icon={faProductHunt} /> Add a Products </Link> 

          <Link className="link-side" to ={`${url}/productsmanage`}> <FontAwesomeIcon icon={faDumpsterFire} /> Manage Products</Link> 


        </Box>
        :
      <Box className="d-grid">
         <Link className="link-side" to ='/'> <FontAwesomeIcon icon={faHome} /> Home</Link> 
        <Link className="link-side" to ="/products"> <FontAwesomeIcon icon={faStore} /> ADD MORE  </Link> 
        <Link className="link-side" to ={`${url}/myorder`}> <FontAwesomeIcon icon={faShoppingBag} /> MyOrder</Link> 
        <Link className="link-side" to ={`${url}/review`}> <FontAwesomeIcon icon={faHandshake} /> Review</Link> 
        <Link className="link-side" to ={`${url}/paylink`}> <FontAwesomeIcon icon={faMoneyBillAlt} /> Pay</Link> 
          </Box>
}
          
          

          <button onClick={logOut} style={{ backgroundColor:"yellow", border:'2px solid blue', padding:'5px 5px', borderRadius:'5px', color:'black' }} className="btn btn-danger mt-3"  >LogOut </button>


      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            SIMBA STORE DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
 
        <Switch>
        <Route exact path={path}>
        <DashboardHome></DashboardHome>
        </Route>

        <Route path={`${path}/myorder`}>
        <ManageOrder></ManageOrder>
        </Route>

        <Route path={`${path}/review`}>
       <Review></Review>
        </Route>

        <Route path={`${path}/paylink`}>
            <Pay></Pay>
        </Route>

        <AdminRoute path={`${path}/addproduct`}>
          <AddProducts></AddProducts>
        </AdminRoute>

        <AdminRoute path={`${path}/allorders`}>
          <ManageAllOrders></ManageAllOrders>
        </AdminRoute>

        <AdminRoute path={`${path}/makeadmin`}>
         <MakeAdmin></MakeAdmin>
        </AdminRoute>

        <AdminRoute path={`${path}/productsmanage`}>
         <ProductsManage></ProductsManage>
        </AdminRoute>

      </Switch>
      
      </Box>
    </Box>
  );
}

MainBorad.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MainBorad;
