import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

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
               "period": "month",
               "items": ["Slack Bot", "2 Knowledge Integrations", "Analytics and Reporting", "Verification", "Unlimited Search", "Browser Extension", "Basic Support"],
               "price": "Free"});
packages.push({"title": "Startup",  
               "description":"Startup Package",
               "period": "month",
               "pricenote": "for teems of 1-10 users*",
               "items": ["Slack Bot", "3 Knowledge Integrations", 
                                      "Analytics and Reporting", 
                                      "Verification", "Unlimited Search", "Jira Integration",  "Browser Extension", "Priority Support"],
               "packagenote": "*Teams of 11+ are $60 per user, per month",
               "price": "40 USD"});
packages.push({"title": "Enterprise",  
               "description":"Enterprise Package",
               "period": "month",
               "pricenote": "for teems of 100-1000 users*",
               "items": ["Slack Bot", "5 Knowledge Integrations", "Analytics and Reporting", "Verification", "Unlimited Search", "Jira Integration", "Advanced AI", "Browser Extension", "Priority Support"],
               "packagenote": "*Teams of 1000+ are $150 per user, per month",
               "price": "100 USD."});

export default {
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
