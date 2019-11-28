const { prisma } = require('../src/generated/prisma-client')

async function main() {
  const plans_details = [
    {
      name: "Basic Membership",
      category: 0,
      price: 0,
      description: "Basic Student Membership"
    },
    {
      name: "Premium Membership",
      category: 0,
      price: 10,
      description: "Premium Student Membership"
    },
    {
      name: "Job Poster",
      category: 1,
      price: 10,
      description: "Job Poster Employer Package"
    },
    {
      name: "Talent Premium Package",
      category: 1,
      price: 20,
      description:"Talent Premium Employer Package"
    },
    {
      name: "Full access Package",
      category: 1,
      price: 30,
      description:"Full Access Employer Package"
    },
  ]
  
  let i = 0;
  for (i = 0; i < plans_details.length; i++) {
    await prisma.createPlan(plans_details[i]).catch(err=>{
        console.log("Opps something happened", err)
    }).then(suc=>{
        console.log("Saved Plan ", plans_details[i].name)
    })
  }
}

main()
