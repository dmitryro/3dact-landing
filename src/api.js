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

front_articles.push({"title": "Time is lost", "description": "Companies have multiple communication channels - Slack, Jira, Salesforce, Dropbox, Bitbucket, Github. Customers do initial research online but frequently do not find a satifying answer, so they resort to Slack, or Jira. Support teams, developers and consultants then spend time answering same queistons over and over again. There's a way to replace this repeated, tedious and counter-productive process with more efficient one."});

front_articles.push({"title": "Knowledge unutilized", "description": "Most content can't be just stored in a knowledge base for further reuse because it contains sensitive data - names, dates, addresses, emails, other sensitive private information. For the same reason this content can't be made publically available. This leads to missed opportunities and missed leads. To be properly reused, this content needs to be sanitized and stored in a template-like format in the knowledge base (as an ontology, a graph, a tree, a taxonomy)."});

front_articles.push({"title": "Impact is not measured", "description": "There's currently very limited number of platforms efficiently reusing knowledge and not just storing it in knowledge base, but taking into consideration many facts and events happening in background. An answer provided to each specific customer may be different one in a matter of minutes, as things change quickly. What we do we carefully analyze facts, we bring our knowledge from our knowledge base and we adjust it to reflect the context and provide the most educated response possible. We also provide automation and extensive insigtful analytics to measure success."});

front_articles.push({"title": "Analytics unutilized", "description": "The observations you make for charts - Google Analytics, Kibana, CloudWatch, Graphana, Mixpanel - require you to make decisions based on limited visual evaluations and within limited time, but you still have to do it manually. The way it's done many facts are not taken into consideration and decision making is based on judgements and thus is prone to potential errors. You never get an educated recommendation based on real, noise-free data. We provide a convinient way to store data, sanitize it, turn facts into actions."});


export default {
  getFrontArticles() {
      return front_articles;
  },
  getPackages() {
      return packages;
  },
  getFeatures() {
      return features;
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
