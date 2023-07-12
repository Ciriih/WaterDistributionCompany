app.get('/logout', (req, res) => {
    // Destroy the user's session
    req.session.destroy(err => {
      if (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
  
      // Redirect to the login page after successfully logging out
      res.redirect('/login');
    });
});  