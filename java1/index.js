import javax.swing.*;
import java.awt.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ClockGreeting {

    public static void main(String[] args) {
        // Frame oluşturuluyor
        JFrame frame = new JFrame("Clock and Greeting");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 400);
        frame.setLayout(null);

        // İsim girişi paneli
        JLabel nameLabel = new JLabel("Enter your name:");
        nameLabel.setBounds(50, 30, 150, 30);
        frame.add(nameLabel);

        JTextField nameField = new JTextField();
        nameField.setBounds(200, 30, 200, 30);
        frame.add(nameField);

        JButton submitButton = new JButton("Submit");
        submitButton.setBounds(420, 30, 80, 30);
        frame.add(submitButton);

        // Karşılama mesajı
        JLabel greetingLabel = new JLabel("", SwingConstants.CENTER);
        greetingLabel.setBounds(50, 80, 400, 40);
        greetingLabel.setFont(new Font("Arial", Font.BOLD, 20));
        frame.add(greetingLabel);

        // Saat ve gün gösterimi
        JLabel clockLabel = new JLabel("", SwingConstants.CENTER);
        clockLabel.setBounds(50, 150, 400, 40);
        clockLabel.setFont(new Font("Arial", Font.PLAIN, 24));
        frame.add(clockLabel);

        // Arka plan rengi
        frame.getContentPane().setBackground(new Color(50, 50, 50));
        nameLabel.setForeground(Color.WHITE);
        greetingLabel.setForeground(Color.WHITE);
        clockLabel.setForeground(Color.CYAN);

        // Submit butonu için ActionListener
        submitButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String name = nameField.getText().trim();
                if (!name.isEmpty()) {
                    greetingLabel.setText("Hello, " + name + "!");
                    nameField.setText("");
                } else {
                    greetingLabel.setText("Please enter your name!");
                }
            }
        });

        // Saat ve günü sürekli güncelleyen bir Timer
        Timer timer = new Timer(1000, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                LocalDateTime now = LocalDateTime.now();
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy HH:mm:ss");
                clockLabel.setText(now.format(formatter));
            }
        });
        timer.start();

        frame.setVisible(true);
    }
}
