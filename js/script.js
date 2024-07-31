/*DATI PER ESERCIZIO:

Name            Role                    Image
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
*/

const ourTeam = [
    {
    Name : 'Wayne Barnett',
    role : 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg'  
    },
    {
    Name : 'Angela Caroll',
    role : 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg' 
    },
    {
    Name : 'Walter Gordon',
    role : 'Office Manager',
    image: 'walter-gordon-office-manager.jpg'
    },
    {
    Name : 'Angela Lopez',
    role : 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg' 
    },
    {
    Name : 'Scott Estrada',
    role : 'Developer',
    image: 'scott-estrada-developer.jpg'
    },
    {
    Name : 'Barbara Ramos',
    role : 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg' 
    },
   
];

const team = document.getElementById('team');


 for (let i = 0; i < ourTeam.length; i++){
    console.log(ourTeam[i]);

    console.log('Name', ourTeam[i].Name);
    console.log('role', ourTeam[i].role);
    console.log('image', ourTeam[i].image);

    team.innerHTML += `
    <ul>
        <li>
            Name:<strong>${ourTeam[i].Name}</strong>
        </li>
        <li>
            Role:<strong>${ourTeam[i].role}</strong>
        </li>
        <li>
            Image:<strong>${ourTeam[i].image}</strong>
        </li>
    </ul>
    <hr>
    `;
 }

 