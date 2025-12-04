# ✅ Portfolio Setup Checklist

## Before You Start
- [ ] Read README_BISAL.md (5 min)
- [ ] Read SETUP_GUIDE.md (10 min)
- [ ] Understand folder structure (see FOLDER_STRUCTURE.txt)

---

## Phase 1: Essential Files (30 min)

### Resume PDF
- [ ] Convert LaTeX resume to PDF using Overleaf or pdflatex
- [ ] Verify PDF is readable and looks good
- [ ] Name it exactly `resume.pdf`
- [ ] Place in `skydeep/public/resume.pdf`
- [ ] Test download: http://localhost:3000/resume.pdf

### Profile Photo
- [ ] Take or select a professional photo
- [ ] Crop to square (500x500px minimum)
- [ ] Name it `sky.jpg`
- [ ] Place in `skydeep/public/images/sky.jpg`
- [ ] Verify it appears in About section

---

## Phase 2: Project Screenshots (1-2 hours)

### Easy Ones (Have Live Demos)
- [ ] **CPU Scheduler**: Screenshot from https://cpu-scheduling-algorithm-ten.vercel.app/
  - Save as `cpu-scheduler.png` in `public/`
  
- [ ] **LUXORA**: Screenshot from https://luxora-ecommerce-m4aq.vercel.app/
  - Save as `luxora.png` in `public/`

### Medium Difficulty (GitHub Repos)
- [ ] **Amazon GreenX**: Visit repo, screenshot README or create graphic
  - Save as `greenx.png` in `public/`
  
- [ ] **8085 CPU**: Screenshot Verilog code or create block diagram
  - Save as `8085-cpu.png` in `public/`

### Harder Ones (May Need Creation)
- [ ] **CALL.E**: Create graphic showing AI + Phone + Stats
  - Save as `calle.png` in `public/`
  
- [ ] **Project Kisan**: Extract slide from presentation or create graphic
  - Save as `kisan.png` in `public/`

### Image Quality Check
- [ ] All images are 1200x600px (or similar 16:9 ratio)
- [ ] All images compressed (each under 500KB)
- [ ] All images are PNG format
- [ ] All filenames are lowercase (cpu-scheduler.png not CPU-Scheduler.png)

---

## Phase 3: Testing (30 min)

### Local Testing
- [ ] Run `npm install` (if first time)
- [ ] Run `npm run dev`
- [ ] Visit http://localhost:3000

### Visual Verification
- [ ] Hero section shows "Bisal Prasad"
- [ ] Tagline is "I build intelligent solutions"
- [ ] About section shows your photo
- [ ] Education shows NIT Silchar, CGPA 9.0
- [ ] Work experience shows 4 positions
- [ ] All 6 projects display with images
- [ ] No broken image icons (alt text showing)

### Link Testing
- [ ] Resume download button works
- [ ] GitHub link goes to github.com/bisal2003
- [ ] LinkedIn link goes to linkedin.com/in/bisal-prasad
- [ ] Email link opens mail client: bisalprasad2003@gmail.com
- [ ] LeetCode link works
- [ ] All project GitHub links work
- [ ] CPU Scheduler demo link works
- [ ] LUXORA demo link works

### Mobile Testing
- [ ] Open DevTools (F12)
- [ ] Toggle device toolbar (Ctrl+Shift+M)
- [ ] Test iPhone view
- [ ] Test tablet view
- [ ] All sections look good on mobile

### Browser Console
- [ ] Open Console (F12 → Console tab)
- [ ] No red errors
- [ ] Images load successfully
- [ ] No 404s for missing files

---

## Phase 4: Pre-Deployment (15 min)

### Build Test
- [ ] Run `npm run build`
- [ ] Build completes without errors
- [ ] No missing dependencies
- [ ] No TypeScript errors

### Final Content Review
- [ ] All personal information correct
- [ ] Email address spelled correctly
- [ ] Phone number correct (+91 9395360772)
- [ ] All links point to correct destinations
- [ ] No placeholder text remaining
- [ ] Grammar and spelling checked

### Performance Check
- [ ] Run Lighthouse audit (F12 → Lighthouse tab)
- [ ] Performance score > 80
- [ ] Accessibility score > 90
- [ ] Best Practices score > 80
- [ ] SEO score > 80

---

## Phase 5: Deployment (15-30 min)

### Choose Platform
- [ ] Vercel (recommended for Next.js) OR
- [ ] Netlify OR
- [ ] GitHub Pages

### Deploy to Vercel
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Run `vercel` in skydeep folder
- [ ] Follow prompts
- [ ] Note deployment URL
- [ ] Visit live site
- [ ] Verify everything works

### Post-Deployment Check
- [ ] All pages load correctly
- [ ] Resume downloads on live site
- [ ] Images display on live site
- [ ] All links work on live site
- [ ] Mobile view works on live site
- [ ] Share on LinkedIn to test preview image

---

## Phase 6: Optional Enhancements

### Social Preview Image
- [ ] Create 1200x630px image with name and title
- [ ] Save as `profile-image.png` in `public/`
- [ ] Test by sharing on LinkedIn/Twitter

### Custom Domain
- [ ] Purchase domain (e.g., bisalprasad.com)
- [ ] Connect to Vercel
- [ ] Update meta tags in `pages/index.tsx`
- [ ] Verify SSL certificate

### Analytics
- [ ] Add Google Analytics
- [ ] Add Vercel Analytics
- [ ] Track visitor metrics

### SEO
- [ ] Submit to Google Search Console
- [ ] Create sitemap
- [ ] Add robots.txt
- [ ] Verify structured data

---

## Ongoing Maintenance

### Regular Updates
- [ ] Update resume every 6 months
- [ ] Add new projects as you build them
- [ ] Update achievements and certifications
- [ ] Keep skills section current

### Monthly Checks
- [ ] Verify all links still work
- [ ] Check for broken images
- [ ] Update project stats if changed
- [ ] Review and update content

---

## Quick Reference

### File Locations to Remember
```
Resume:        skydeep/public/resume.pdf
Profile Photo: skydeep/public/images/sky.jpg
Projects:      skydeep/public/*.png (6 images)
```

### Important Links
```
Email:    bisalprasad2003@gmail.com
GitHub:   github.com/bisal2003
LinkedIn: linkedin.com/in/bisal-prasad
LeetCode: leetcode.com/u/Bisal2003
```

### Common Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
vercel           # Deploy to Vercel
```

---

## Troubleshooting

### Images Not Showing?
- [ ] Check filename spelling (exact match, case-sensitive)
- [ ] Verify images are in `public/` folder (not nested)
- [ ] Check browser console for 404 errors
- [ ] Clear cache and refresh (Ctrl+Shift+R)

### Resume Not Downloading?
- [ ] Verify file is named exactly `resume.pdf`
- [ ] Check it's in `public/` root folder
- [ ] Test direct URL: http://localhost:3000/resume.pdf

### Build Errors?
- [ ] Delete `.next` folder
- [ ] Delete `node_modules` folder
- [ ] Run `npm install` again
- [ ] Run `npm run build` again

### Links Not Working?
- [ ] Check for typos in URLs
- [ ] Verify external links with https://
- [ ] Test mailto: links work
- [ ] Ensure no trailing spaces

---

## Time Estimates

| Phase | Task | Estimated Time |
|-------|------|----------------|
| 1 | Essential Files | 30 min |
| 2 | Project Screenshots | 1-2 hours |
| 3 | Testing | 30 min |
| 4 | Pre-Deployment | 15 min |
| 5 | Deployment | 15-30 min |
| **Total** | | **2.5-3.5 hours** |

---

## Success Criteria

You're done when:
- ✅ Portfolio shows your name and information
- ✅ All 6 projects display with images
- ✅ Resume downloads successfully
- ✅ All links work correctly
- ✅ Mobile view looks professional
- ✅ Site is live and accessible
- ✅ You're proud to share it!

---

## 🎉 Congratulations!

Once all items are checked:
- [ ] Share on LinkedIn
- [ ] Add link to resume
- [ ] Add link to GitHub profile
- [ ] Share with friends and professors
- [ ] Use for job applications

**Your professional portfolio is live! 🚀**

---

**Remember:** This is a living document. Come back and update as you add new projects and achievements!
