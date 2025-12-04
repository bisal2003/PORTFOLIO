# Portfolio Customization Guide for Bisal Prasad

## 📋 Summary of Changes Made

All personal information has been successfully updated throughout the portfolio website:

### ✅ Updated Components:
1. **Personal Information** - Name, email, phone, tagline
2. **About Me Section** - Education, background, skills
3. **Work Experience** - Research internship, ML internship, leadership roles
4. **Projects** - All 6 major projects with links and descriptions
5. **Social Media Links** - GitHub, LinkedIn, Instagram, YouTube
6. **Contact Information** - Email addresses throughout the site

---

## 📁 File & Asset Placement Guide

### 1. **Resume PDF**
**Location:** `skydeep/public/resume.pdf`

**Instructions:**
- Convert your LaTeX resume to PDF
- Name it exactly `resume.pdf`
- Place it in the `public` folder
- The "Check out my resume!" button in the hero section will automatically link to it

**How to generate PDF from LaTeX:**
```bash
# If you have LaTeX installed locally
pdflatex resume.tex

# Or use online tools like Overleaf
# 1. Go to overleaf.com
# 2. Upload your .tex file
# 3. Compile and download the PDF
```

---

### 2. **Profile Photo**
**Location:** `skydeep/public/images/sky.jpg`

**Instructions:**
- Prepare a professional headshot (square aspect ratio recommended, e.g., 500x500px)
- Name it `sky.jpg` OR update the reference in AboutMe component
- Place it in `public/images/` folder
- Supported formats: .jpg, .png, .webp

**Current reference in code:**
```tsx
// File: components/Home/AboutMe/AboutMe.tsx
<Image
  src="/images/sky.jpg"
  alt="Profile Image"
  layout="fill"
  objectFit="cover"
/>
```

**To use a different filename:**
- Update line in `AboutMe.tsx`: change `/images/sky.jpg` to your filename

---

### 3. **Project Screenshots/Images**

**Location:** `skydeep/public/` (root of public folder)

**Required Project Images:**
You need to add images for the following projects. Place them in the `public` folder:

1. **CALL.E AI Agent** → `calle.png`
2. **Project Kisan** → `kisan.png`
3. **Amazon GreenX** → `greenx.png`
4. **CPU Scheduler** → `cpu-scheduler.png`
5. **LUXORA E-Commerce** → `luxora.png`
6. **8085 CPU in Verilog** → `8085-cpu.png`

**Image Specifications:**
- Recommended dimensions: 1200x600px (2:1 ratio) or 1920x1080px
- Format: PNG or JPG
- Try to keep file size under 500KB for optimal loading

**How to create project images:**
- Screenshots of your deployed projects
- Use browser dev tools to get full-page screenshots
- Or create mockups using Figma/Canva
- For the 8085 CPU, you could use a diagram or simulation screenshot

---

### 4. **Favicon & Meta Images**
**Location:** `skydeep/public/`

**profile-image.png** (for social media previews)
- Size: 1200x630px (Open Graph standard)
- This appears when your portfolio is shared on social media
- Shows your name and a professional image

---

## 🔗 Your Updated Links

### Social Media & Coding Profiles
```
GitHub: https://github.com/bisal2003
LinkedIn: https://linkedin.com/in/bisal-prasad
LeetCode: https://leetcode.com/u/Bisal2003
GeeksforGeeks: https://www.geeksforgeeks.org/user/bisalprar2xc/
CodeForces: https://codeforces.com/profile/bisalprasad-2003
Email: bisalprasad2003@gmail.com
Phone: +91 9395360772
```

### Project Links
```
CALL.E: https://github.com/bisal2003/Call_Agent_AI.git
Project Kisan: https://drive.google.com/file/d/1dNUV00jJpZSGB-SzDGL0YWlGz315VO1_/view?usp=sharing
Amazon GreenX: https://github.com/Subrata-20/HackOn-Amazon.git
CPU Scheduler: 
  - GitHub: https://github.com/bisal2003/CPU_scheduling_Algorithm.git
  - Live Demo: https://cpu-scheduling-algorithm-ten.vercel.app/
LUXORA: 
  - GitHub: https://github.com/bisal2003/luxora-ecommerce.git
  - Live Demo: https://luxora-ecommerce-m4aq.vercel.app/
8085 CPU: https://github.com/bisal2003/microprocessor_8085_mini_verilog
BCI Research: https://github.com/bisal2003/Thought-to-Speech-BCI.git
```

---

## 📝 Educational Details Updated

### Current Education
```
Institution: National Institute of Technology, Silchar
Degree: B.Tech in Electronics and Communication Engineering
Duration: 2023 - 2027
CGPA: 9.0/10
```

### Previous Education
```
School: Jawahar Navodaya Vidyalaya, Cachar
Duration: 2015 - 2022
Class XII: 90%
Class X: 83.4%
```

---

## 🎓 Certifications & Achievements

### Certifications Mentioned
1. **Machine Learning Specialization**
   - Link: https://drive.google.com/file/d/1Yskbhxs0aj1N2ehaFg3PmMTl_O0X0HS0/view?usp=sharing

2. **Full Stack Web Development**
   - Link: https://drive.google.com/file/d/1CZCWwL4tt8Nuv1Fwanx71YHt0VVr9rCs/view?usp=drive_link

### Major Achievements Listed
- ✅ Winner - Neurathon 2025 (AI/ML Hackathon)
- ✅ Winner - Drone Innovation Challenge
- ✅ Finalist - Google Cloud Agentic AI Day (Top 50 in India)
- ✅ Semifinalist - Amazon HackOn Season 5 (Top 130)
- ✅ 3rd Place - Rat in a Maze Arduino Competition
- ✅ Senior Fundamental Analyst - Finance Club
- ✅ District-Level Badminton Participant

### Coding Profile Stats
- LeetCode: 300+ Problems Solved
- GeeksforGeeks: 50+ Problems
- CodeForces: Pupil Rank

---

## 🛠️ Technical Skills Listed

### Programming Languages
C++, Python, Verilog, JavaScript, MongoDB

### Frameworks & Technologies
- **Frontend:** React.js, Next.js
- **Backend:** Node.js, Express.js
- **ML/AI:** TensorFlow, PyTorch, OpenCV
- **Cloud:** AWS (S3, Rekognition, KMS), Google Cloud (Vertex AI)
- **Tools:** Docker, Git

---

## 🚀 Quick Setup Steps

### Step 1: Add Your Resume
```bash
cd skydeep/public
# Copy your resume.pdf here
```

### Step 2: Add Your Profile Photo
```bash
cd skydeep/public/images
# Copy your photo as sky.jpg
```

### Step 3: Add Project Images
```bash
cd skydeep/public
# Add all 6 project images:
# - calle.png
# - kisan.png
# - greenx.png
# - cpu-scheduler.png
# - luxora.png
# - 8085-cpu.png
```

### Step 4: Test Locally
```bash
cd skydeep
npm install
npm run dev
# Visit http://localhost:3000
```

### Step 5: Build for Production
```bash
npm run build
npm start
```

---

## 📂 Complete File Structure for Assets

```
skydeep/
├── public/
│   ├── resume.pdf                 ← Your resume PDF
│   ├── profile-image.png          ← Social media preview image
│   ├── calle.png                  ← CALL.E project screenshot
│   ├── kisan.png                  ← Project Kisan screenshot
│   ├── greenx.png                 ← Amazon GreenX screenshot
│   ├── cpu-scheduler.png          ← CPU Scheduler screenshot
│   ├── luxora.png                 ← LUXORA E-commerce screenshot
│   ├── 8085-cpu.png               ← 8085 CPU Verilog screenshot
│   └── images/
│       └── sky.jpg                ← Your profile photo
```

---

## ⚠️ Important Notes

1. **Image Optimization:**
   - Keep images under 500KB for fast loading
   - Use tools like TinyPNG or Squoosh to compress
   - Consider using WebP format for better compression

2. **Resume Updates:**
   - Whenever you update your resume, just replace `resume.pdf`
   - No code changes needed!

3. **Project Images:**
   - Use consistent aspect ratios (16:9 recommended)
   - Add alt text for accessibility (already done in code)
   - High-quality screenshots look more professional

4. **Social Media:**
   - If you create Instagram/YouTube later, update the links in:
     - `components/Footer/Footer.tsx`
     - `components/Home/SocialMediaArround/SocialMediaArround.tsx`

5. **Domain:**
   - Update `bisalprasad.dev` in `pages/index.tsx` to your actual domain when you deploy

---

## 🎨 Design & Theme

The theme colors and design are kept exactly as they were:
- Primary Color: Dark Navy (#0a192f)
- Secondary/Accent: Teal (#64ffda)
- All animations and transitions preserved
- Responsive design maintained

---

## 📞 Need Help?

If you want to make additional changes:
1. Personal info → Update in respective component files
2. Add more projects → Edit `SomethingIveBuilt.tsx`
3. Add more work experience → Edit `WhereIHaveWorked.tsx`
4. Change colors/theme → Edit `tailwind.config.cjs`

---

## ✅ Checklist Before Going Live

- [ ] Add resume.pdf to public folder
- [ ] Add profile photo (sky.jpg) to public/images
- [ ] Add all 6 project screenshots to public folder
- [ ] Test all external links (GitHub, LinkedIn, etc.)
- [ ] Test resume download button
- [ ] Test all project links and demos
- [ ] Verify email links work (mailto:)
- [ ] Check mobile responsiveness
- [ ] Run `npm run build` successfully
- [ ] Deploy to Vercel/Netlify

---

**Good luck with your portfolio! 🚀**
