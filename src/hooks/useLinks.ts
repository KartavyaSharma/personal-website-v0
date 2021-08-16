import * as React from 'react'

export function useLinks(mobile: boolean):null {
    const mobile_string = 'underline italic text-highlight';
	const big_string = 'r-link ai-element ai-element_type2 ai-element2';
	
	React.useEffect(() => {
		let body = document.getElementById('body_content');
		
		if(mobile === false) {
		    let list_1 = body.getElementsByTagName('ul');
		    for (let ordered_list of list_1) {
				let list_2 = ordered_list.getElementsByTagName('li');
				for (let link of list_2) {
					let one_link = link.getElementsByTagName('a');
					for (let sing_link of one_link) {
						sing_link.className=big_string;
					}
				}
		    }            
		}

		let paragraph = body.getElementsByTagName('p');
		for (let para of paragraph) {
		    let links = para.getElementsByTagName('a');
		    for(let link of links) {
				if(mobile === true) {
					link.className = mobile_string;
				} else {
					link.className = big_string;
				}
		    }
		}
	}, [mobile_string, big_string, mobile])

	return;
}
