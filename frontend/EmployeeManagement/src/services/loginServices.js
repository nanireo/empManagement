const apiUrl = 'http://localhost:4000/api/login';


exports. loginAuthentication = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};


// export { fetchContractors };
