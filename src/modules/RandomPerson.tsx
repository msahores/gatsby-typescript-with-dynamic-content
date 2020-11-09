import React, { useState, useEffect} from 'react'
import { RouteComponentProps } from '@reach/router'

interface Props extends RouteComponentProps<{
	results: string
}>{

}

export const RandomPerson:React.FC<Props> = ({results = 1}) => {
	const [person, setPerson] = useState(null);
	useEffect(() => {
		fetch(`https://randomuser.me/api?results=${results}`)
			.then(res => res.json())
			.then(json => setPerson(json));
	}, [results])
	return (
		<div>
				{!person && <span>Loading...</span>}
				<pre>{JSON.stringify(person, null, 2)}</pre> 
		</div>
	)
}