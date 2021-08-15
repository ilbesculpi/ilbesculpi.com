import { useEffect, useState } from 'react';
import Loader from './Loader';
import About from './About';
import Info from './Info';
import Skills from './Skills';
import Experience from './Experience';
import Showcase from './Showcase';
import './Portfolio.css';

function Portfolio(props) {

    const [profile, setProfile] = useState(null);
    const [isDataReady, setDataReady] = useState(false);

    const fetchProfileData = async() => {
        try {
            const response = await fetch('../data/profile_en.json');
            const data = await response.json();
            console.log('profile', data);
            setProfile(data);
            setDataReady(true);
        }
        catch(error) {
            console.error('error fetching profile data', error);
        }
    }

    useEffect(() => {
        fetchProfileData();
    }, []);

    if( !isDataReady ) {
        return <Loader />
    }

    return (
        <div className="container-fluid p-0">
            <About name={ profile.name } bio={ profile.bio } avatar={ profile.avatar } />
            <Info info={ profile.personal } />
            <Skills left={ profile.skills.soft } right={ profile.skills.tech } />
            <Experience experience={ profile.experience } />
            <Showcase />
        </div>
    );
}

export default Portfolio;
