import { useEffect, useState } from 'react';
import sqliteService  from '../services/sqliteService';
import { ActivityIndicator, View } from 'react-native';

const AppProvider = (children) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let mounted = true;
        const init = async () => {
            try {
                await sqliteService
            } catch (e) {
                console.warr('Mensaje con el error');
            } finally {
                if (mounted) setReady(true);
            }
        } 
        init();
        return ()=> {mounted = false}
    },[]);
    
    if (!ready) {
        return(
            <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size = "large" />
            </View>
        )
    }
        return children;
}
export default AppProvider;