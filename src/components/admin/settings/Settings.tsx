import React from 'react';
import { Link } from 'react-router-dom';
import path from '../../../routes/path';

const Settings = () => (
        <div>
            <h3>Settings</h3>
            <Link to={path.ADMIN_SETTINGS_HOME_PAGE_LAYOUT}>Home page layout</Link>
        </div>
);

export default Settings;
