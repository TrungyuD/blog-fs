import React from 'react'
import {Container} from '@material-ui/core';
import Header from '../components/header';
import PostList from '../components/PostList';

const HomePage = () => {
    return (
        <Container maxWidth="lg">
            <Header />
            <PostList/>
        </Container>
    )
}

export default HomePage
