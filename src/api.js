import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

var front_articles = Array();

var features = Array();
features.push({"title":"Feature1",
               "description": "Description1"});
features.push({"title":"Feature2",
               "description": "Description2"});
features.push({"title":"Feature3",
                "description": "Description3"});

var about = Array();
about.push({"title":"About Us",
            "story": "3D Act is an AI and automation platform that is transforming the way businesses deliver customer support. Use 3D Act to automate answering support inquiries, give reps everything they need at their fingertips, and ensure your information is always accurate. 3D Act integrates with your existing systems and workflows to build machine learning models of common tasks, answer known questions, and make every rep more productive. Start using the most accurate AI-powered performance on the market to reduce resolution times, eliminate unnecessary escalations, and improve customer satisfaction. 3D Act was founded in 2015 and is based in New York City, NY."});

var howworks = Array();
howworks.push({"index":"1", "title":"Itegrate", "description":"Integrate your Knowledge Base, Dashboard, API and third party tools to read conversations from."});
howworks.push({"index":"2","title":"Load", "description":"Sanitize your content - remove sensitive private data using AI/NLP and store in Knowledge Base."});
howworks.push({"index":"3","title":"Monitor", "description":"Use dashboard to define rules to follow and events to respond, actions to run and shortcuts to use."});
howworks.push({"index":"4","title":"Use", "description":"Get envolned when it's really needed, not all the time."});
howworks.push({"index":"5","title":"Feedback", "description":"Provide feedback when it's needed automatically."});

var faqs = Array();
faqs.push({"index":"1", "question":"How does it work", "answer": "It just works."});
faqs.push({"index":"2", "question":"How do I install", "answer": "You install."});
faqs.push({"index":"3", "question":"Where do I learn", "answer": "You learn."});
faqs.push({"index":"4", "question":"Where do I start", "answer": "You start."});
faqs.push({"index":"5", "question":"How do I solve it", "answer": "You solve it."});

var team = Array();
team.push({"username":"Dmitry",
           "name": "Dmitry Roitman",
           "title": "CTO and Co-Founder",
           "avatar": "../assets/png/icon-avatar-default.png",
           "profile": "some",
           "bio": "Dmitry is an experienced developer and architect. He's building our platform."});
team.push({"username":"Jimin",
           "avatar": "../assets/png/icon-avatar-default.png",
           "profile": "some",
           "name": "Jimin Kim",
           "title": "CEO and Co-Founder",
           "bio": "Description2"});
team.push({"username":"dmitryro",
           "avatar": "../assets/png/icon-avatar-default.png",
           "profile": "some",
           "name": "Dmitry Roitman",
           "title": "COO and Co-Founder",
           "bio": "Description3"});

var team_members = Array();

team_members.push({"username":"dmitryro",
                   "profile": "some story",
                   "bio": "some cool story",
                   "avatar":"../assets/png/icon-avatar-default.png"});

team_members.push({"username":"jiminkim",
                   "profile": "some story",
                   "bio": "some cool story",
                   "avatar":"../assets/png/icon-avatar-default.png"});

team_members.push({"username":"thirdperson",
                   "profile": "some story",
                   "bio": "some cool story",
                   "avatar":"../assets/png/icon-avatar-default.png"});

var packages = Array();
packages.push({"title": "Free", 
               "description":"Free Package",
               "pricenote": "for teems of 1-10 users*",
               "packagenote": "*Teams of 11+ are $7 per user, per month",
               "period": ["month","year"],
               "items": ["Slack Bot", "2 Knowledge Integrations", "Analytics and Reporting", "Verification",  "Browser Extension", "Basic Support"],
               "price": ["Free", "Free"]});
packages.push({"title": "Startup",  
               "description":"Startup Package",
               "period": ["month", "year"],
               "pricenote": "for teems of 1-10 users*",
               "items": ["Slack Bot", "3 Knowledge Integrations", 
                                      "Analytics and Reporting", 
                                      "Verification", "Browser Extension", "Priority Support"],
               "packagenote": "*Teams of 11+ are $60 per user, per month",
               "price": ["40 USD","450 USD"]});
packages.push({"title": "Enterprise",  
               "description":"Enterprise Package",
               "period": ["month","year"],
               "pricenote": "for teems of 100-1000 users*",
               "items": ["Slack Bot", "5 Knowledge Integrations", "Analytics and Reporting", "Verification", "Advanced AI", "Browser Extension", "Priority Support"],
               "packagenote": "*Teams of 1000+ are $150 per user, per month",
               "price": ["100 USD", "1000 USD"]});

front_articles.push({"title": "Time is lost", "description": "Companies have multiple communication channels - Slack, Jira, Salesforce, Dropbox, Bitbucket, Github. Customers do initial research online but frequently do not find a satifying answer, so they resort to Slack, or Jira. Support teams, developers and consultants then spend time answering same queistons over and over again. There's a way to replace this repeated, tedious and counter-productive process with more efficient one.", "points":[]});
front_articles.push({"title": "Knowledge unutilized", "description": "Most content can't be just stored in a knowledge base for further reuse because it contains sensitive data - names, dates, addresses, emails, other sensitive private information. For the same reason this content can't be made publically available. This leads to missed opportunities and missed leads. To be properly reused, this content needs to be sanitized and stored in a template-like format in the knowledge base (as an ontology, a graph, a tree, a taxonomy).", "points":[]});

front_articles.push({"title": "Impact is not measured", "description": "There's currently very limited number of platforms efficiently reusing knowledge and not just storing it in knowledge base, but taking into consideration many facts and events happening in background. An answer provided to each specific customer may be different one in a matter of minutes, as things change quickly. What we do we carefully analyze facts, we bring our knowledge from our knowledge base and we adjust it to reflect the context and provide the most educated response possible. We also provide automation and extensive insigtful analytics to measure success.", "points":[]});

front_articles.push({"title": "Analytics unutilized", "description": "The observations you make for charts - Google Analytics, Kibana, CloudWatch, Graphana, Mixpanel - require you to make decisions based on limited visual evaluations and within limited time, but you still have to do it manually. The way it's done many facts are not taken into consideration and decision making is based on judgements and thus is prone to potential errors. You never get an educated recommendation based on real, noise-free data. We provide a convinient way to store data, sanitize it, turn facts into actions.","points":[]});

front_articles.push({"title": "Have your conversations streamed, sanitized and actionalized from:", "description":"Integrate with third party tools:","points":["Atlassian (Jira, Confluence, Bitbucket)", "ELK", "Slack", "Sap", "Dropbox", "Salesforce", "Github", "Trello", "Kubernetes"]});

export default {
  getFaqs() {
      return faqs;
  },
  getHowworks() {
      return howworks;
  },
  getFrontArticles() {
      return front_articles;
  },
  getPackages() {
      return packages;
  },
  getFeatures() {
      return features;
  },
  getAbout() {
      return about;
  },
  getTeam() {
      return team;
  },
  getRepos(repo) {
    return axios.get(
      `/repos/${repo}`,
      { headers: { Authorization: process.env.GITHUB_TOKEN } },
    );
  },

  getMembers() {
    return axios.get(
      '/orgs/french-ai/members',
      { headers: { Authorization: process.env.GITHUB_TOKEN } },
    );
  },
};
