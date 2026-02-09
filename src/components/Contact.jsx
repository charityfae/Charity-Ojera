import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-mono">{" Let's build something amazing together"}</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text text-center">Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  { Icon: FaEnvelope, text: 'ojeracharity1@gmail.com', href: 'mailto:ojeracharity1@gmail.com' },
                  { Icon: FaPhone, text: '+256 773 177 056', href: 'tel:+256773177056' },
                  { Icon: FaMapMarkerAlt, text: 'Mukono, Uganda', href: '#' },
                ].map(({ Icon, text, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary text-xl" />
                    </div>
                    <span>{text}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
