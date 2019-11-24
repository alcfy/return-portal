import React from 'react'
import SearchOrderPage from '../components/SearchOrderPage';

class Index extends React.Component {
	render() {
		return (
			<SearchOrderPage
				shopDomain="www.google.com"
				shopLogoUrl="https://anya23blog.files.wordpress.com/2016/11/pomelo-logo-square.jpg?w=820&h=312&crop=1" />
		);
	}
}

export default Index;