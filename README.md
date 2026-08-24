# Americans for a Moral Union Website

This is the official static website for **Americans for a Moral Union**, a 501(c)(3) nonprofit organization.

**Live Site (after deployment):** https://www.amoralunion.com

---

## 🚀 Quick Start – Deploy to GitHub Pages (Free)

### 1. Create the GitHub Repository

1. Go to [github.com](https://github.com) and sign in (create a free account if needed).
2. Click the **+** icon (top right) → **New repository**.
3. Repository name: `amoralunion` or `americans-for-a-moral-union` (recommended: keep it simple).
4. **Public** (required for free GitHub Pages).
5. **Do NOT** initialize with README (we'll push our files).
6. Click **Create repository**.

### 2. Upload the Website Files

**Option A: Using GitHub Web Interface (Easiest for Beginners)**

1. On your new repo page, click **Add file** → **Upload files**.
2. Drag and drop the entire contents of this folder:
   - `index.html`
   - `css/` folder (with `style.css`)
   - `js/` folder (with `main.js`)
   - `images/` folder (with the logo and hero images)
3. Add a commit message like "Initial website launch" and click **Commit changes**.

**Option B: Using Git (Recommended)**

Open Terminal / Command Prompt in this folder and run:

```bash
git init
git add .
git commit -m "Initial commit: Americans for a Moral Union website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/amoralunion.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 3. Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** (top right).
3. In the left sidebar, scroll down and click **Pages**.
4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: `main` (or `gh-pages` if you used that)
   - Folder: `/ (root)`
5. Click **Save**.
6. Wait 1–2 minutes. Your site will be live at:  
   `https://YOUR_USERNAME.github.io/amoralunion`

### 4. Connect Your Custom Domain (www.amoralunion.com)

#### Step A: Add Custom Domain in GitHub

1. In repo **Settings → Pages**, scroll to **Custom domain**.
2. Enter: `www.amoralunion.com`
3. Click **Save**.
4. GitHub will automatically create a `CNAME` file in your repo (you may need to pull changes if using git).

#### Step B: Update DNS Records on GoDaddy

1. Log in to your [GoDaddy account](https://dcc.godaddy.com/).
2. Go to **My Products** → find your domain `amoralunion.com` → **DNS**.
3. **Remove** any existing A records or the default GoDaddy website forwarding if present.
4. Add these records:

   **For the www subdomain (most important):**
   - Type: **CNAME**
   - Host/Name: `www`
   - Value/Points to: `YOUR_USERNAME.github.io`  
     (Example: `lanceelevated.github.io`)
   - TTL: **600** (or lowest available)

   **For the root/apex domain (recommended for amoralunion.com to also work):**
   - Create **4 A records**:
     - Type: **A**
     - Host/Name: `@` (or leave blank)
     - Value: `185.199.108.153`
     - TTL: `600`
   - Repeat for the other three IPs:
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

5. Save changes. DNS propagation usually takes **5–60 minutes** (sometimes up to 24–48 hours).

#### Step C: Verify & Enable HTTPS

- Go back to GitHub → **Settings → Pages**.
- You should see a green checkmark next to your custom domain.
- GitHub will automatically provision a free SSL certificate (HTTPS). This can take a few minutes to a few hours.
- Once done, your site will be securely available at **https://www.amoralunion.com**

**Tip:** After DNS changes, you can force HTTPS by re-adding the custom domain in GitHub settings if needed.

---

## ✏️ Customization Guide

### Update Forms (Important!)

The contact and member forms currently point to placeholder Formspree endpoints.

**To make them work:**

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create two new forms:
   - One for **Member Sign-ups**
   - One for **Volunteer / Contact**
3. Copy the form endpoint URL (looks like `https://formspree.io/f/abc123xyz`).
4. In `index.html`, replace:
   - `YOUR_MEMBER_FORM_ID` with your member form ID
   - `YOUR_VOLUNTEER_FORM_ID` with your volunteer form ID

Forms will then email submissions directly to you.

### Donate Button

1. Log into your [PayPal account](https://www.paypal.com).
2. Go to **PayPal Buttons** → Create a **Donate** button.
3. Copy the generated HTML code.
4. In `index.html`, replace the entire `<form>` block inside `#donate-paypal` with your PayPal code.

(Stripe Checkout is also possible but requires more setup.)

### Add Real Events & Blog Posts

- Edit the hardcoded event cards and blog articles directly in `index.html`.
- For a dynamic calendar later, embed a public Google Calendar.

### Merch Store

Currently uses placeholder images and "Buy Now" links.  
Recommended next step: Create a free Printful or Printify store, connect your designs (we have the logo), and update the links.

### Logo & Images

We included high-quality generated assets:
- `images/logo-circular.png` — Main circular badge
- `images/logo-banner.png` — Horizontal header version
- `images/hero-bg.jpg` — Patriotic flag background

You can replace or add more anytime.

### Rotating Quotes

Edit the `quotes` array in `js/main.js` to add your own favorite quotes or remove any.

---

## 📞 Need Help?

- GitHub Pages issues: Check the [official docs](https://docs.github.com/en/pages)
- DNS problems: Use [whatsmydns.net](https://www.whatsmydns.net) to check propagation
- Formspree support: Excellent free tier documentation
- Want advanced features (blog CMS, member portal, etc.)? We can upgrade later to a static site generator like Astro, Hugo, or 11ty.

---

**Built with ❤️ for a Moral Union**  
*Americans for a Moral Union • 2026*

---

## Folder Structure

```
amoralunion-site/
├── index.html          # Main website (all sections)
├── css/
│   └── style.css       # Custom styles + Tailwind overrides
├── js/
│   └── main.js         # Mobile menu, rotating quotes, form handling
├── images/
│   ├── logo-circular.png
│   ├── logo-banner.png
│   └── hero-bg.jpg
└── README.md           # This file
```

Ready to launch? Follow the steps above and your professional nonprofit website will be live on your custom domain in under an hour! 🇺🇸

Let me know if you want any section expanded, new pages added, or further customizations.