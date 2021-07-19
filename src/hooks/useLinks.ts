import * as React from 'react'

export function useLinks(mobile: boolean):null {
	React.useEffect(() => {
        if(mobile === false) {
            let body = document.getElementById('body_content');
            let list_1 = body.getElementsByTagName('ul');
            for (let ordered_list of list_1) {
                let list_2 = ordered_list.getElementsByTagName('li');
                for (let link of list_2) {
                    let one_link = link.getElementsByTagName('a');
                    for (let sing_link of one_link) {
                        sing_link.className+='r-link ai-element ai-element_type2 ai-element2 max-w-full';
                    }
                }
            }            
        }
    
        let paragraph = document.getElementsByTagName('p');
        for (let para of paragraph) {
            let links = para.getElementsByTagName('a');
            for(let link of links) {
                const mobile_string = 'underline italic text-highlight';
                const big_string = 'r-link ai-element ai-element_type2 ai-element2';
                let apstring = mobile ? mobile_string : big_string;
                link.className+= apstring;
            }
        }		
	}, [])

	return;
}