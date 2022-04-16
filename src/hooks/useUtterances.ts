import * as React from 'react'

export function useUtterances():null {
	React.useEffect(() => {
                const script = document.createElement('script');
                script.setAttribute("src", "https://utteranc.es/client.js");
                script.setAttribute("repo", "KartavyaSharma/personal-website-utterances-comments");
                script.setAttribute("issue-term", "pathname");
                script.setAttribute("theme", "dark-blue");
                script.setAttribute("crossorigin", "anonymous");
                script.setAttribute("async", "true");

                const anchor = document.getElementById('inject-comments');
                if(anchor.getElementsByTagName('script').length === 0) anchor.appendChild(script);
	})

	return;
}