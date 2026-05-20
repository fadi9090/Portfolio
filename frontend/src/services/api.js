const API_URL = 'http://127.0.0.1:8000/api/';

export const sendContact = async (formData) => {
  try {
    console.log('Sending to:', `${API_URL}contact/`);
    
    const response = await fetch(`${API_URL}contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || '',
        message: formData.message
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const getProjects = async () => {
  try {
    const response = await fetch(`${API_URL}projects/`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    const data = await response.json();
    console.log('Fetched projects with skills:', data);
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const getSkills = async () => {
  try {
    const response = await fetch(`${API_URL}skills/`);
    if (!response.ok) throw new Error('Failed to fetch skills');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// export const getProject = async (id) => {
//   try {
//     const response = await fetch(`${API_URL}projects/${id}/`);
//     if (!response.ok) throw new Error('Failed to fetch project');
//     return await response.json();
//   } catch (error) {
//     console.error('API Error:', error);
//     throw error;
//   }
// };

// New function to create a project with skills
export const createProject = async (projectData) => {
  try {
    const response = await fetch(`${API_URL}projects/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projectData)
    });
    if (!response.ok) throw new Error('Failed to create project');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};