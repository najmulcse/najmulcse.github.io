#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 EmailJS Setup for Your Portfolio\n');
console.log('Follow these steps to set up email functionality:\n');

console.log('1. Go to https://www.emailjs.com/');
console.log('2. Create a free account');
console.log('3. Add an email service (Gmail recommended)');
console.log('4. Create an email template');
console.log('5. Get your credentials\n');

console.log('Once you have your credentials, I\'ll help you configure them.\n');

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function setupEmailJS() {
  try {
    console.log('Please enter your EmailJS credentials:\n');
    
    const serviceId = await askQuestion('Enter your Service ID: ');
    const templateId = await askQuestion('Enter your Template ID: ');
    const publicKey = await askQuestion('Enter your Public Key: ');
    
    if (!serviceId || !templateId || !publicKey) {
      console.log('❌ Please provide all required credentials.');
      process.exit(1);
    }
    
    const configContent = `// EmailJS Configuration
export const emailjsConfig = {
  serviceId: '${serviceId}',
  templateId: '${templateId}', 
  publicKey: '${publicKey}'
};`;

    const configPath = path.join(__dirname, 'src', 'config', 'emailjs.js');
    fs.writeFileSync(configPath, configContent);
    
    console.log('\n✅ EmailJS configuration updated successfully!');
    console.log('📧 Your contact form is now ready to send emails.');
    console.log('\n🧪 Test your setup by filling out the contact form on your portfolio.');
    
  } catch (error) {
    console.error('❌ Error setting up EmailJS:', error.message);
  } finally {
    rl.close();
  }
}

// Check if user wants to set up now
askQuestion('Do you have your EmailJS credentials ready? (y/n): ').then((answer) => {
  if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
    setupEmailJS();
  } else {
    console.log('\n📋 No problem! Here\'s what you need to do:');
    console.log('\n1. Visit: https://www.emailjs.com/');
    console.log('2. Create account and verify email');
    console.log('3. Add email service (Gmail/Outlook)');
    console.log('4. Create email template with these variables:');
    console.log('   - {{from_name}}');
    console.log('   - {{from_email}}');
    console.log('   - {{subject}}'); 
    console.log('   - {{message}}');
    console.log('   - {{to_email}}');
    console.log('\n5. Get your Service ID, Template ID, and Public Key');
    console.log('6. Run this script again with: node setup-email.js');
    console.log('\n📖 Full instructions are in EMAILJS_SETUP.md');
    rl.close();
  }
}); 